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
    
      
      
    
      var element = document.getElementById("0c547865-3667-4c67-ae59-feeec4b82b38");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0c547865-3667-4c67-ae59-feeec4b82b38' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;2882f9d4-20fb-4f1d-a258-5c6cf13ffa31&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60988&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60951&quot;}},&quot;id&quot;:&quot;60950&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60959&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60992&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60946&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;60949&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60962&quot;}},&quot;id&quot;:&quot;60956&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;60986&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;60947&quot;}},&quot;id&quot;:&quot;60946&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60955&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60963&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60954&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60988&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;60983&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;60963&quot;}},&quot;id&quot;:&quot;60958&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60980&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60978&quot;}},&quot;id&quot;:&quot;60982&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60974&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60951&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60942&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60938&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60960&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60986&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;60950&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;60953&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60957&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60944&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60979&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;60954&quot;},{&quot;id&quot;:&quot;60955&quot;},{&quot;id&quot;:&quot;60956&quot;},{&quot;id&quot;:&quot;60957&quot;},{&quot;id&quot;:&quot;60958&quot;},{&quot;id&quot;:&quot;60959&quot;},{&quot;id&quot;:&quot;60960&quot;},{&quot;id&quot;:&quot;60961&quot;}]},&quot;id&quot;:&quot;60964&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60947&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;60946&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;60949&quot;},{&quot;id&quot;:&quot;60953&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;60950&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;60976&quot;},{&quot;id&quot;:&quot;60981&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;60983&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;60964&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;60938&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;60942&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;60940&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;60944&quot;}},&quot;id&quot;:&quot;60937&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60973&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60974&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60975&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60977&quot;}},&quot;id&quot;:&quot;60976&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;60961&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;60973&quot;}},&quot;id&quot;:&quot;60977&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;60978&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;60979&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;60980&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;60982&quot;}},&quot;id&quot;:&quot;60981&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60992&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60991&quot;}},&quot;id&quot;:&quot;60973&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;60962&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60991&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60940&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;60975&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;6J4I5V33B8Bej6nNX4wEwNnIYsI2nwPANTrPjhJGAsAar7DLFZf/vybiCoQF+/y/S5bTcdXE+r9gTcAMK0/6v84vGWo8K/q/VSsfjZKR+L9Of5oY4973v5iTR4HUbva/L7JU2SYK9r975lV6hkD1v6/z6NyY6vO//V845dI787+uHtkHG2rxv7v9j3yb5O+/Oiz4rtNy779D9kIlbX/uv8OlAzC0tey/uwPNyhdK679H9bSqp6rqvyrnCm56aeq/VrQga8RK6r8UpRtPFSzqv36Y5QwNIeq/dgxBklOK6b/h70wePkvpv7UXW59y+ei/iXQMP7H/57+pNIyzqsrnvwGi0qDLfee/ku///tvl5r8X1cFUnj/lv00i1yJhC+W/nzzVg0QK5b8YAsLYhVPivygBrNwasOG/UaP/KD514b9X+mSUq0bhv5OZJtfFCeG/GA5cc3b94L9BY429/sbfv/q8McSKKd+/YIJqSqQG3L+Z0BcKEfLZv49ZvPLqmNm/0Ysp3+gg2b/6rsGs9MPTv4qQyiZGrdG/kjuFKWGPzr+UDByxO3nMvyB/PY6SL8m/v0sRm9LDxL9qi20u8YjAv/BdBNR/Gbq/NoSOxBt3q79jGirelpCkv2musQv6Z3S/E5sw6UJecj8Hhf8xuhSHP+M3zOHQuYk/KrF45H8Zoj+JE9HRREC0PwxKbMScjL0/uxKvxsRkwD/VQ2QlWBbBPxGP7M9TbsY/ZXuOoYRezz9Yat+aWPXQP1w7p8S8S9I/gLu7NhN12D8DzoepSxPZPwVY/4GvJ9k/Np916zAx2j9r/m4VANfbP4EdPJNIl9w/9AOiiKUn3j8d69WVGsXeP1CqxlD5nuM/gY57K55O5z9HxNivYZXnPycYyEOtqOc/z5iHi4tL6T8AFhbCUNzpP/Suo+kbh+o/BQHJvFwg7D/41Cnvx+LtP7k+7NCH+e4/+1XJ9+ui8D9xf+VTZULxP1Npj8g1wPM/u+AFpOba9D/UgPXHWL31P4M16iBMNvY/Ka02A1ws9z9qg/N8ijr3Px2fARf+iPk/YYaDtS8pAkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;MMLuNUQR4D9E4axkQOfmP05uOnuSweg/loth4tpz6z9zqCcadTTwP+2O+j19gvE/2jQWR5Wd8j9Q2Z95atjyPxlo88ph6vI/VmpwuTa38z9ZwLJzjhD0PzQ2XL+VyPQ/6KZVk+z69D/CDNXCvF/1PyiGi5GzCvY/AtBjjRZi9j+pcBN88kr3P5EA3CDZBvg/8vRBFEsj+D9vQq+2JGD4P48W//OS0vg/Eb9MDXot+T+uwlIVVlX5PzZGfWShZfk/6tI35U5t+T+7Fjms+nT5P+CZxry8d/k/4rxvG2ud+T8IxGx4MK35PxM6KVijwfk/3uI8sBMA+j/W8hxTVQ36P4BXyxeNIPo/HARAAIlG+j+6is9qGLD6P203Srcnvfo/2LAK3269+j96f8+JHmv7P7b/1Ej5k/s/LBfAdbCi+z9qweYaVa77P5tZNoqOvfs/evwoY6LA+z+YU04oIAf8P2HIeafOGvw/tK+ydit//D/tBb3evcH8P850qKHizPw/hs4a5OLb/D8hymdqgYf9P++tJjtXyv0/R6xn7QkX/j83P+5EbDj+Pw4oHNcGbf4/ROtO1sKz/j9JJxntcPf+PxDdXwE0L/8/78XtkCOS/z+WV4ekva3/Pykn+gLM9f8/J0y6kJcEAEDD/xhdigsAQBzmcOjcDABAYvHI/zIkAEBOREcTAVEAQCixEXMydgBAlng1JiaDAEAfIivBsogAQHlkf55yswBA23MMJfT6AECm9q2JVQ8BQLZzSsy7JAFAuLtrM1GHAUDgfJi6NJEBQID1H/h6kgFA81m3DhOjAUDn71YBcL0BQNjBM4l0yQFAPyCKWHriAUCyXl2pUewBQErVGCrfcwJA0HFvxdPpAkCJGPs1rPICQAUDeagV9QJAGvNwcXEpA0DAwkIYijsDQN51NH3jUANAISCZlwuEA0CfOuX9WLwDQNeHHfow3wNAf1Xy/booBEDcX/lUmVAEQFXaI3IN8ARAL3gBqbk2BUA1YP0xVm8FQGGNOgiTjQVASqvNABfLBUDa4Dyfos4FQMdnwIU/YgZAMMPB2pcUCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;60994&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;60993&quot;}},&quot;id&quot;:&quot;60978&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60994&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;60993&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;}],&quot;root_ids&quot;:[&quot;60937&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"2882f9d4-20fb-4f1d-a258-5c6cf13ffa31","root_ids":["60937"],"roots":{"60937":"0c547865-3667-4c67-ae59-feeec4b82b38"}}];
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