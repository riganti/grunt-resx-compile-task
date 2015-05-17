namespace MyNamespace
{
    using System;
    using System.Reflection;

    internal class MyResources
    {

        private static System.Resources.ResourceManager resourceMan;
        private static System.Object locker = new System.Object();
        internal static System.Resources.ResourceManager ResourceManager
        {
            get
            {
                if (resourceMan == null)
                    lock (locker)
                        if (resourceMan == null)
                        {
                            resourceMan = new System.Resources.ResourceManager("MyNamespace.MyResources", typeof(MyResources).GetTypeInfo().Assembly);
                        }
                return resourceMan;
            }
        }

        internal static System.Globalization.CultureInfo Culture { get; set; }

        internal static string UnexpectedEndOfInput
        {
            get { return ResourceManager.GetString("UnexpectedEndOfInput", Culture); }
        }

        internal static string Binding_UnsupportedOperator
        {
            get { return ResourceManager.GetString("Binding_UnsupportedOperator", Culture); }
        }

        internal static string Binding_UnsupportedExpression
        {
            get { return ResourceManager.GetString("Binding_UnsupportedExpression", Culture); }
        }

        internal static string Binding_UnsupportedExpressionInDataContext
        {
            get { return ResourceManager.GetString("Binding_UnsupportedExpressionInDataContext", Culture); }
        }

        internal static string ControlCollection_ControlAlreadyHasParent
        {
            get { return ResourceManager.GetString("ControlCollection_ControlAlreadyHasParent", Culture); }
        }

        internal static string HtmlWriter_CannotCloseTagBecauseNoTagIsOpen
        {
            get { return ResourceManager.GetString("HtmlWriter_CannotCloseTagBecauseNoTagIsOpen", Culture); }
        }

    }

}

