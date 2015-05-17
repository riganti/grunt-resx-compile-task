# grunt-resx-compile-task

> Grunt task that generates C# class from a RESX file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-resx-compile-task --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-resx-compile-task');
```

## The "resx_compile_task" task

### Overview
In your project's Gruntfile, add a section named `resx_compile_task` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  resx_compile_task: {
    options: {
      // There are no options.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Usage Examples

This example shows how to generate C# class from the specified resource file.

```js
grunt.initConfig({
  resx_compile_task: {
    options: {},
    files: {
      'dest/MyResources.cs': { path: 'src/MyResources.resx', namespace: 'MyApp.Resources', className: 'MyResources' }
    },
  },
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
