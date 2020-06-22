(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("f5ca59c9-0d34-49dd-86f8-f180bf1b75bd");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'f5ca59c9-0d34-49dd-86f8-f180bf1b75bd' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js": "YobFyzPeVUsFQydHkJGsJL1kyfHnWxOlPc3EwaV22TmBaeGoXHLWx5aRRVPS9xlE", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js": "NuAg9+TcTQQqvQCTtkCneRrpkTiMhhfiq0KHiBzx8ECiKiLWXHN6i6ia3q7b3eHu", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js": "uMVqQc8JqHitD67bXTn9a06Mrk3EiHRaZ18EJENQenAKJ/KL71SakdXYomZQpGRr", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js": "u+eGuEXC8aw0VSCm2mH+b/tQEAitUOYiR1H6SuIVEdUmXsf4vN8m/SmXpmjb7U/X"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;80202b20-1b74-4d5f-9941-99662848054b&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59472&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59518&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;59517&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59459&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59461&quot;}},&quot;id&quot;:&quot;59457&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59510&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59531&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59538&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59533&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59483&quot;}},&quot;id&quot;:&quot;59482&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;59515&quot;}]},&quot;id&quot;:&quot;59514&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59451&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59454&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59441&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59458&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59539&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59538&quot;}},&quot;id&quot;:&quot;59516&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59470&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59478&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59481&quot;},{&quot;id&quot;:&quot;59485&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59482&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59519&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59524&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59493&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59470&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59474&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59472&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59476&quot;}},&quot;id&quot;:&quot;59469&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59500&quot;}},&quot;id&quot;:&quot;59504&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59455&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59474&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59448&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59490&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59510&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59452&quot;}},&quot;id&quot;:&quot;59451&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59476&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59501&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;59516&quot;}},&quot;id&quot;:&quot;59520&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59505&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59508&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59448&quot;}},&quot;id&quot;:&quot;59447&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59500&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59501&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59502&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59504&quot;}},&quot;id&quot;:&quot;59503&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59513&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;59502&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59445&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59439&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59478&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59481&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59512&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59447&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;59450&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59456&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59487&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59533&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59452&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59491&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;59516&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;59517&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;59518&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;59520&quot;}},&quot;id&quot;:&quot;59519&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;59492&quot;}},&quot;id&quot;:&quot;59488&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59492&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59443&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59486&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59489&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59508&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;nMQgsHJokT+DwMqhRbazPzvfT42XbsI/arx0kxgExj85tMh2vp/KPy/dJAaBlcM/wcqhRbbzvT/0/dR46SaxPxkEVg4tsp0/exSuR+F6hD/6fmq8dJNoP/yp8dJNYmA//Knx0k1iUD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;59513&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;59512&quot;}},&quot;id&quot;:&quot;59500&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;59461&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59486&quot;},{&quot;id&quot;:&quot;59487&quot;},{&quot;id&quot;:&quot;59488&quot;},{&quot;id&quot;:&quot;59489&quot;},{&quot;id&quot;:&quot;59490&quot;},{&quot;id&quot;:&quot;59491&quot;}]},&quot;id&quot;:&quot;59493&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;59503&quot;}]},&quot;id&quot;:&quot;59515&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59479&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;59438&quot;},{&quot;id&quot;:&quot;59469&quot;}]},&quot;id&quot;:&quot;59521&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59483&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;59524&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;59455&quot;},{&quot;id&quot;:&quot;59456&quot;},{&quot;id&quot;:&quot;59457&quot;},{&quot;id&quot;:&quot;59458&quot;},{&quot;id&quot;:&quot;59459&quot;},{&quot;id&quot;:&quot;59460&quot;}]},&quot;id&quot;:&quot;59462&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;59482&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;59485&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59539&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;59447&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;59450&quot;},{&quot;id&quot;:&quot;59454&quot;},{&quot;id&quot;:&quot;59514&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;59451&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;59503&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;59505&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;59462&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;59439&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;59443&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;59441&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;59445&quot;}},&quot;id&quot;:&quot;59438&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;59460&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;59531&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;59479&quot;}},&quot;id&quot;:&quot;59478&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;59521&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"80202b20-1b74-4d5f-9941-99662848054b","root_ids":["59521"],"roots":{"59521":"f5ca59c9-0d34-49dd-86f8-f180bf1b75bd"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();