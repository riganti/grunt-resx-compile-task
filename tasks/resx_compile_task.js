/*
 * grunt-resx-compile-task
 * https://github.com/riganti/grunt-resx-compile-task
 *
 * Copyright (c) 2015 Tomáš Herceg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('resx_compile_task', 'Grunt task that generates C# class from a RESX file', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    function generateResourcesCode(source, namespace, className) {

      function getResourcePairs(source) {
        // load document
        var xmldoc = require('xmldoc');
        var document = new xmldoc.XmlDocument(source);
        var children = document.childrenNamed("data");

        // extract values
        var pairs = [];
        for (var i = 0; i < children.length; i++) {
          var elem = children[i];
          pairs[elem.attr.name] = elem.val;
        }
        return pairs;
      }

      var pairs = getResourcePairs(source);

      var result = "namespace " + namespace + "\r\n";
      result += "{\r\n";
      result += "    using System;\r\n";
      result += "    using System.Reflection;\r\n\r\n";
      result += "    internal class " + className + "\r\n";
      result += "    {\r\n\r\n";
      result += "        private static System.Resources.ResourceManager resourceMan;\r\n";
      result += "        private static System.Object locker = new System.Object();\r\n";        
      result += "        internal static System.Resources.ResourceManager ResourceManager\r\n";
      result += "        {\r\n";
      result += "            get\r\n";
      result += "            {\r\n";
      result += "                if (resourceMan == null)\r\n";
      result += "                    lock (locker)\r\n";
      result += "                        if (resourceMan == null)\r\n";
      result += "                        {\r\n";
      result += "                            resourceMan = new System.Resources.ResourceManager(\"" + namespace + "." + className + "\", typeof(" + className + ").GetTypeInfo().Assembly);\r\n";
      result += "                        }\r\n";
      result += "                return resourceMan;\r\n";
      result += "            }\r\n";
      result += "        }\r\n\r\n";
      result += "        internal static System.Globalization.CultureInfo Culture { get; set; }\r\n\r\n";
      for (var name in pairs) {
        if (pairs.hasOwnProperty(name)) {
          result += "        internal static string " + name + "\r\n";
          result += "        {\r\n";
          result += "            get { return ResourceManager.GetString(\"" + name + "\", Culture); }\r\n"; 
          result += "        }\r\n\r\n";           
        }        
      }
      result += "    }\r\n\r\n";
      result += "}\r\n\r\n";
      return result;      
    } 

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Warn on and remove invalid source files (if nonull was set).
      var src = f.orig.src[0];
      if (!grunt.file.exists(src.path)) {
        grunt.log.warn('Source file "' + src.path + '" not found.');
      }
      
      // Read file source.
      var fileSource = grunt.file.read(src.path);
      
      // Generate destination file
      var output = generateResourcesCode(fileSource, src.namespace, src.className);
      grunt.file.write(f.dest, output);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });

  });

};
