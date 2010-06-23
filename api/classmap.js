YAHOO.env.classMap = {"Console": "console", "DOMEventFacade": "event", "plugin.NodeFocusManager": "node-focusmanager", "YUI": "yui", "DataSource.Local": "datasource", "NodeList": "node", "Widget": "widget", "Plugin.Drag": "dd", "Object": "yui", "YUI~array~extras": "collection", "Base": "base", "Test.Suite": "test", "Plugin.Base": "plugin", "Do.AlterArgs": "event-custom", "Pollable": "datasource", "ImgLoadImgObj": "imageloader", "ClassNameManager": "classnamemanager", "Plugin.DDWindowScroll": "dd", "Assert.ComparisonFailure": "test", "DataSchema.XML": "dataschema", "YUI~dump": "dump", "ArrayList": "collection", "Loader": "loader", "Coverage.Format.ObjectAssert": "test", "Tab": "tabview", "Intl": "intl", "Plugin.SortScroll": "sortable", "Do.Prevent": "event-custom", "State": "attribute", "Plugin.Shim": "shim-plugin", "CustomEvent": "event-custom", "Coverage.Format.DateAssert": "test", "Plugin.Drop": "dd", "DataSource.Get": "datasource", "Selector": "dom", "DataSourceXMLSchema": "datasource", "Plugin.Align": "align-plugin", "DD.Drop": "dd", "DataType.Number": "datatype", "HistoryBase": "history", "DataSourceArraySchema": "datasource", "Profiler": "profiler", "Queue": "yui", "DataSource.IO": "datasource", "WidgetChild": "widget-child", "ImgLoadGroup": "imageloader", "Test.Wait": "test", "Do.Method": "event-custom", "SliderValueRange": "slider", "DataSourceCache": "datasource", "WidgetPosition": "widget-position", "Get": "yui", "Do.AlterReturn": "event-custom", "Event": "event", "Plugin.NodeFX": "anim", "TabView": "tabview", "UA": "yui", "DataSourceJSONSchema": "datasource", "WidgetParent": "widget-parent", "Test.TestNode": "test", "DOM": "dom", "YUI~array~invoke": "collection", "Cache": "cache", "DD.Delegate": "dd", "plugin.NodeMenuNav": "node-menunav", "DataSchema.Base": "dataschema", "Do.Halt": "event-custom", "SyntheticEvent": "event", "Node": "node", "Test.Runner": "test", "Assert.ShouldError": "test", "Plugin.DDConstrained": "dd", "ArrayList~add": "collection", "JSON": "json", "Test.Manager": "test", "Cookie": "cookie", "DataType.Date": "datatype", "DataSchema.Array": "dataschema", "WidgetPositionConstrain": "widget-position-constrain", "Lang": "yui", "DD.Drag": "dd", "DataSchema.JSON": "dataschema", "AsyncQueue": "async-queue", "Easing": "anim", "DataSource.Function": "datasource", "History": "history", "Plugin.Host": "pluginhost", "Plugin.DDNodeScroll": "dd", "Plugin.Sortable": "sortable", "Attribute": "attribute", "StyleSheet": "stylesheet", "Plugin.WidgetAnim": "widget-anim", "YUI~oop": "oop", "Assert.Error": "test", "YAHOO.widget.SWF": "swf", "ArrayList~filter": "collection", "DD.Scroll": "dd", "SliderBase": "slider", "Overlay": "overlay", "Subscriber": "event-custom", "YUI~substitute": "substitute", "io": "io", "Assert.UnexpectedError": "test", "Do": "event-custom", "Anim": "anim", "Plugin.DDProxy": "dd", "DD.DDM": "dd", "WidgetStack": "widget-stack", "Test.Case": "test", "Assert": "test", "Slider": "slider", "Assert.UnexpectedValue": "test", "Coverage.Format.Mock": "test", "config": "yui", "Assert.ShouldFail": "test", "DataSchema.Text": "dataschema", "EventTarget": "event-custom", "DataType.XML": "datatype", "Test.Reporter": "test", "WidgetStdMod": "widget-stdmod", "ArrayAssert": "test", "DataType.Date.Locale": "datatype", "EventHandle": "event-custom", "Do.Error": "event-custom", "Plugin.ConsoleFilters": "console-filters", "QueryString": "querystring", "WidgetPositionAlign": "widget-position-align", "ValueChange": "value-change", "ClickableRail": "slider", "Array": "yui", "EventFacade": "event-custom", "DataSourceTextSchema": "datasource"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
