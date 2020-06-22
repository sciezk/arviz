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
    
      
      
    
      var element = document.getElementById("392cf5a1-dcbd-4490-89ca-a80a64f96a4a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '392cf5a1-dcbd-4490-89ca-a80a64f96a4a' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;2825a00f-0de3-4f51-bebf-b5a8c9a1a01a&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62030&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61968&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61966&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61998&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61978&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62022&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;ixcu/Yd9wj/v0jY1RwTDP1OOP20Gi8M/t0lIpcURxD8bBVHdhJjEP4DAWRVEH8U/5HtiTQOmxT9IN2uFwizGP6zyc72Bs8Y/EK589UA6xz90aYUtAMHHP9gkjmW/R8g/POCWnX7OyD+gm5/VPVXJPwRXqA3928k/aBKxRbxiyj/Mzbl9e+nKPzCJwrU6cMs/lETL7fn2yz/5/9MluX3MP1273F14BM0/wXbllTeLzT8lMu7N9hHOP4nt9gW2mM4/7aj/PXUfzz9SZAh2NKbPP9uPCNd5FtA/je0Mc9lZ0D8/SxEPOZ3QP/GoFauY4NA/owYaR/gj0T9VZB7jV2fRPwfCIn+3qtE/uR8nGxfu0T9rfSu3djHSPx3bL1PWdNI/zzg07zW40j+BljiLlfvSPzT0PCf1PtM/5lFBw1SC0z+Yr0VftMXTP0oNSvsTCdQ//GpOl3NM1D+uyFIz04/UP2AmV88y09Q/EoRba5IW1T/E4V8H8lnVP3Y/ZKNRndU/KJ1oP7Hg1T/a+mzbECTWP4xYcXdwZ9Y/PrZ1E9Cq1j/wE3qvL+7WP6JxfkuPMdc/VM+C5+501z8GLYeDTrjXP7iKix+u+9c/auiPuw0/2D8cRpRXbYLYP86jmPPMxdg/gAGdjywJ2T8yX6ErjEzZP+S8pcfrj9k/lhqqY0vT2T9IeK7/qhbaP/rVspsKWto/rDO3N2qd2j9ekbvTyeDaPxDvv28pJNs/wkzEC4ln2z90qsin6KrbPyYIzUNI7ts/JgjNQ0ju2z8mCM1DSO7bP3SqyKfoqts/wkzEC4ln2z8Q779vKSTbP16Ru9PJ4No/rDO3N2qd2j/61bKbClraP0h4rv+qFto/lhqqY0vT2T/kvKXH64/ZPzJfoSuMTNk/gAGdjywJ2T/Oo5jzzMXYPxxGlFdtgtg/auiPuw0/2D+4iosfrvvXPwYth4NOuNc/VM+C5+501z+icX5LjzHXP/ATeq8v7tY/PrZ1E9Cq1j+MWHF3cGfWP9r6bNsQJNY/KJ1oP7Hg1T92P2SjUZ3VP8ThXwfyWdU/EoRba5IW1T9gJlfPMtPUP67IUjPTj9Q//GpOl3NM1D9KDUr7EwnUP5ivRV+0xdM/5lFBw1SC0z809Dwn9T7TP4GWOIuV+9I/zzg07zW40j8d2y9T1nTSP2t9K7d2MdI/uR8nGxfu0T8HwiJ/t6rRP1VkHuNXZ9E/owYaR/gj0T/xqBWrmODQPz9LEQ85ndA/je0Mc9lZ0D/bjwjXeRbQP1JkCHY0ps8/7aj/PXUfzz+J7fYFtpjOPyUy7s32Ec4/wXbllTeLzT9du9xdeATNP/n/0yW5fcw/lETL7fn2yz8wicK1OnDLP8zNuX176co/aBKxRbxiyj8EV6gN/dvJP6Cbn9U9Vck/POCWnX7OyD/YJI5lv0fIP3RphS0Awcc/EK589UA6xz+s8nO9gbPGP0g3a4XCLMY/5HtiTQOmxT+AwFkVRB/FPxsFUd2EmMQ/t0lIpcURxD9Tjj9tBovDP+/SNjVHBMM/ixcu/Yd9wj+LFy79h33CPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[146]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFSa15Ka/T8QVJrXkpr9P8GPrngAz/w/i7iayFcQ/D+QKS9z/l37P2aDHdgmvPo/ifSpQWcp+j/4LIdPr6v5P/0gYiRfPfk/oDNoPkbh+D+Z8gy1E5T4P7L8JxDlVfg/By9UKAAn+D8TYUDVSAL4P81V6oZ44fc/9PASberF9z8tv5LB7qj3P3RVINxIh/c/8IF6NNRd9z9bnCvpYy33P9WQICmV8PY/0zZ+lvKk9j/bD6MxCkv2P4zSpoz44PU/E4leIypl9T8Nx7b7otj0P288nsYTO/Q/lB+3wL+M8z/mgvmQ1c3yP63kGeMKAfI/t9E7O/kp8T+cc2LWzEjwPxwsBe4bvu4/3K/RMwnm7D8FTy88cQ3rP+gR3KLnM+k/5aDNvHVl5z/KQd3fBanlP226NYac/eM/z7rT/EZt4j/YQM5yufrgP79P5rsDTN8/m8u3Ae7m3D9ru6AKhr/aP+vJHr911tg/aEKrP/Ey1z9Zt3XESMrVP5xRYt9wndQ/JsYjJ5uj0z+aKTrH+9LSP4N7VNxkI9I/72JryViP0T9ua3uHvRPRP6YKVjuJrdA/aB9QFQlV0D81c4xAvgLQP+ZBEIVqXc8/DNKW4DK1zj8I1zbEmPjNPyYpsr/RMc0/yky9tzdVzD/ylZV0DWPLP/raorJEYco/0AAM+PxRyT/7hl+WMjvIP3t26mO0NMc/0HDmGHsuxj8RcXC78T7FP+PXbJ8+X8Q/RmS8Q0Oxwz+CDaqp1DfDPzcrCuHj7MI/DyIXk2rVwj8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[146]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62026&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62025&quot;}},&quot;id&quot;:&quot;61997&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;61999&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;62020&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61971&quot;}},&quot;id&quot;:&quot;61970&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;62036&quot;},{&quot;id&quot;:&quot;62034&quot;}]},&quot;id&quot;:&quot;62037&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61986&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62003&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;61997&quot;}},&quot;id&quot;:&quot;62001&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;61997&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;61998&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;61999&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62001&quot;}},&quot;id&quot;:&quot;62000&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;61978&quot;},{&quot;id&quot;:&quot;61979&quot;},{&quot;id&quot;:&quot;61980&quot;},{&quot;id&quot;:&quot;61981&quot;},{&quot;id&quot;:&quot;61982&quot;},{&quot;id&quot;:&quot;61983&quot;},{&quot;id&quot;:&quot;61984&quot;},{&quot;id&quot;:&quot;61985&quot;}]},&quot;id&quot;:&quot;61988&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;2GXR36cx3D+Kw9V7B3XcPzwh2hdnuNw/8H7es8b73D+i3OJPJj/dP1Q65+uFgt0/Bpjrh+XF3T+49e8jRQneP2pT9L+kTN4/HLH4WwSQ3j/ODv33Y9PeP4BsAZTDFt8/MsoFMCNa3z/kJwrMgp3fP5aFDmji4N8/pHEJAiES4D99oAvQ0DPgP1bPDZ6AVeA/L/4PbDB34D8ILRI64JjgP+FbFAiQuuA/uooW1j/c4D+TuRik7/3gP2zoGnKfH+E/RRcdQE9B4T8eRh8O/2LhPx5GHw7/YuE/HkYfDv9i4T9FFx1AT0HhP2zoGnKfH+E/k7kYpO/94D+6ihbWP9zgP+FbFAiQuuA/CC0SOuCY4D8v/g9sMHfgP1bPDZ6AVeA/faAL0NAz4D+kcQkCIRLgP5aFDmji4N8/5CcKzIKd3z8yygUwI1rfP4BsAZTDFt8/zg7992PT3j8csfhbBJDeP2pT9L+kTN4/uPXvI0UJ3j8GmOuH5cXdP1Q65+uFgt0/otziTyY/3T/wft6zxvvcPzwh2hdnuNw/isPVewd13D/YZdHfpzHcP9hl0d+nMdw/&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[54]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsngrYENgRAKyeCtgQ2BEDXPk/sPE0EQMbamjpCYgRAkDb3c7dyBEDGSTXQR38EQKZIdQqqhgRARx1Eg6OGBECyl1WEUn8EQJ0wiCTMcQRAGIpOsdBbBEBghm8HtTsEQARJY3/RFARAmHgfER3lA0BvvmmSx6sDQJiYNRRzagNAMuY0u8AiA0Cc1yLBZdMCQMh+8jVzfQJAkPDSULgeAkDe3KUzobwBQLDDdwbgVgFApqD+mQPtAECc4NadCoIAQNRarI5BEwBAozpJnpBJ/z9lCuIo+3D+PwAAAAAAAAAA&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[54]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62028&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62027&quot;}},&quot;id&quot;:&quot;62002&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;61988&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;61978&quot;},{&quot;id&quot;:&quot;61979&quot;},{&quot;id&quot;:&quot;61980&quot;},{&quot;id&quot;:&quot;61981&quot;},{&quot;id&quot;:&quot;61982&quot;},{&quot;id&quot;:&quot;61983&quot;},{&quot;id&quot;:&quot;61984&quot;},{&quot;id&quot;:&quot;61985&quot;}]},&quot;id&quot;:&quot;62035&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62031&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;93Qh3K6E4T/QoyOqXqbhP6nSJXgOyOE/ggEoRr7p4T9bMCoUbgviPzRfLOIdLeI/DY4usM1O4j/mvDB+fXDiP7/rMkwtkuI/mBo1Gt2z4j9xSTfojNXiP0p4ObY89+I/I6c7hOwY4z/81T1SnDrjP9UEQCBMXOM/rjNC7vt94z+HYkS8q5/jP2CRRopbweM/OcBIWAvj4z8S70omuwTkP+wdTfRqJuQ/xUxPwhpI5D+ee1GQymnkP3eqU156i+Q/UNlVLCqt5D9Q2VUsKq3kP1DZVSwqreQ/d6pTXnqL5D+ee1GQymnkP8VMT8IaSOQ/7B1N9Gom5D8S70omuwTkPznASFgL4+M/YJFGilvB4z+HYkS8q5/jP64zQu77feM/1QRAIExc4z/81T1SnDrjPyOnO4TsGOM/Sng5tjz34j9xSTfojNXiP5gaNRrds+I/v+syTC2S4j/mvDB+fXDiPw2OLrDNTuI/NF8s4h0t4j9bMCoUbgviP4IBKEa+6eE/qdIleA7I4T/QoyOqXqbhP/d0IdyuhOE/93Qh3K6E4T8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[52]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzXXHPFECQAvNdcc8UQJA1N6wsK9vAkDnt7PVfokCQLZJveH3mwJAau7o9W6oAkBkW7vLlbECQE/bUbwdtwJARQsKndO7AkDrce1keb8CQLNbhaXNxAJAtrO7kDzMAkBJH4QeX9cCQGnAmkkd5QJAbba7Yln1AkCrZ+J2agcDQLEBHhVWHANAgjuwyuszA0AnO/FPk00DQFirMDmEaANAA/M3yYuFA0BYusGIHqQDQNCwVKYXwgNAjXG0FWPgA0AZ6qfxZ/4DQG3f3+Y9GgRAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[52]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62030&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62029&quot;}},&quot;id&quot;:&quot;62007&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;61987&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62032&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62004&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62009&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61983&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;61961&quot;},0,0]]},&quot;id&quot;:&quot;62034&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;62002&quot;}},&quot;id&quot;:&quot;62006&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;62002&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;62003&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62004&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62006&quot;}},&quot;id&quot;:&quot;62005&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61971&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61984&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61981&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61964&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62008&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61987&quot;}},&quot;id&quot;:&quot;61982&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;KQhY+tnO5D8CN1rIifDkP9tlXJY5EuU/tJReZOkz5T+Nw2AymVXlP2byYgBJd+U/PyFlzviY5T8YUGecqLrlP/F+aWpY3OU/yq1rOAj+5T+j3G0GuB/mP3wLcNRnQeY/VTpyohdj5j8uaXRwx4TmPweYdj53puY/4MZ4DCfI5j+59Xra1unmP5IkfaiGC+c/a1N/djYt5z9EgoFE5k7nPx2xgxKWcOc/9t+F4EWS5z/PDoiu9bPnP6g9inyl1ec/gWyMSlX35z9am44YBRnoPzPKkOa0Oug/DfmStGRc6D/mJ5WCFH7oP79Wl1DEn+g/mIWZHnTB6D9xtJvsI+PoP0rjnbrTBOk/IxKgiIMm6T/8QKJWM0jpP9VvpCTjaek/rp6m8pKL6T+HzajAQq3pP2D8qo7yzuk/OSutXKLw6T8SWq8qUhLqP+uIsfgBNOo/xLezxrFV6j+d5rWUYXfqP3YVuGIRmeo/T0S6MMG66j8oc7z+cNzqPwGivswg/uo/2tDAmtAf6z+z/8JogEHrP4wuxTYwY+s/ZV3HBOCE6z8+jMnSj6brPxe7y6A/yOs/8OnNbu/p6z/JGNA8nwvsP6JH0gpPLew/e3bU2P5O7D9UpdamrnDsPy3U2HRekuw/BgPbQg607D/fMd0QvtXsP7hg395t9+w/kY/hrB0Z7T9qvuN6zTrtP0Pt5Uh9XO0/HBzoFi1+7T/1Surk3J/tP8557LKMwe0/p6jugDzj7T+B1/BO7ATuP1oG8xycJu4/MzX16ktI7j8MZPe4+2nuP+WS+Yari+4/vsH7VFut7j++wftUW63uP77B+1Rbre4/5ZL5hquL7j8MZPe4+2nuPzM19epLSO4/WgbzHJwm7j+B1/BO7ATuP6eo7oA84+0/znnssozB7T/1Surk3J/tPxwc6BYtfu0/Q+3lSH1c7T9qvuN6zTrtP5GP4awdGe0/uGDf3m337D/fMd0QvtXsPwYD20IOtOw/LdTYdF6S7D9UpdamrnDsP3t21Nj+Tuw/okfSCk8t7D/JGNA8nwvsP/DpzW7v6es/F7vLoD/I6z8+jMnSj6brP2VdxwTghOs/jC7FNjBj6z+z/8JogEHrP9rQwJrQH+s/AaK+zCD+6j8oc7z+cNzqP09EujDBuuo/dhW4YhGZ6j+d5rWUYXfqP8S3s8axVeo/64ix+AE06j8SWq8qUhLqPzkrrVyi8Ok/YPyqjvLO6T+HzajAQq3pP66epvKSi+k/1W+kJONp6T/8QKJWM0jpPyMSoIiDJuk/SuOdutME6T9xtJvsI+PoP5iFmR50weg/v1aXUMSf6D/mJ5WCFH7oPw35krRkXOg/M8qQ5rQ66D9am44YBRnoP4FsjEpV9+c/qD2KfKXV5z/PDoiu9bPnP/bfheBFkuc/HbGDEpZw5z9EgoFE5k7nP2tTf3Y2Lec/kiR9qIYL5z+59Xra1unmP+DGeAwnyOY/B5h2Pnem5j8uaXRwx4TmP1U6cqIXY+Y/fAtw1GdB5j+j3G0GuB/mP8qtazgI/uU/8X5paljc5T8YUGecqLrlPz8hZc74mOU/ZvJiAEl35T+Nw2AymVXlP7SUXmTpM+U/22VcljkS5T8CN1rIifDkPykIWPrZzuQ/KQhY+tnO5D8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[154]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwRVWBuiqoP/BFVYG6Kqg/03TKKToTqD+2Bj41qe2nPwTVkggrzKc/eKcd1+qvpz9t1kmC6rKnP0SljgRv56c/PXFdmo1EqD9Yoz+4j/SoPxi59wa+7ak/+jGs2YtPqz9JtapZSRytP6ZHcz/wbK8/Z1JxG5AosT9rt2AA+dayPzjuFLMh5bQ/SSOXMNIttz+l0WeLo9+5PwHTgFSh8bw/htE8umY3wD9sNX0m7CHCPx0mheNKScQ/yQ4oCVWkxj96J/YMEzfJPx0T2qK8DMw/WSLhNbMmzz+1SF/PM0HRPyMbjHmSCtM/E78Kzkn51D80keIeR/nWP9rk7DoAEtk/HsPri99B2z97E6O27n/dP7hDV4B6yt8/riX7NmwR4T8lgPmTiD3iP4YLGfdmauM/UGKEyAuV5D/Tyg30F7vlP3pz+aLQ3+Y/IgU9o2D/5z9VK3phohvpP8mDPTnhOeo//5VVJUVU6z+AJbVjtWzsP3bCQ9ziiO0/UaFDU2ep7j9V3Or2c8rvP95ZNNZIevA/0PU2qzUU8T+FJVj5tLDxP5e4V0deU/I/nVrVuvD48j8KXqjVK6fzP1hRSLMyWvQ/Qvhy6NYT9T/CqznW6tP1P1LG++88mfY/IHYch1Bl9z94VqzFxDj4P/NYq4uWEfk/K2fVWgfu+T8us12FNtD6P3iazO6OtPs/3CvPdreY/D/Re9MC1H79Pzpu7QrLYv4/RSXJGM8//z/3d9eLpAkAQDkfqG9UbgBAB1UHfWLOAEChSApZOiYBQI4kIUZndQFAhQ6+ayO7AUCv7my6ivUBQJ6/TLsWKAJAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[154]}},&quot;selected&quot;:{&quot;id&quot;:&quot;62032&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;62031&quot;}},&quot;id&quot;:&quot;62012&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62014&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61962&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61975&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;62007&quot;}},&quot;id&quot;:&quot;62011&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;62007&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;62008&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62009&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62011&quot;}},&quot;id&quot;:&quot;62010&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;61970&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;61973&quot;},{&quot;id&quot;:&quot;61977&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;61974&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;62000&quot;},{&quot;id&quot;:&quot;62005&quot;},{&quot;id&quot;:&quot;62010&quot;},{&quot;id&quot;:&quot;62015&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;62017&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;61988&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;61962&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;61966&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;61964&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;61968&quot;}},&quot;id&quot;:&quot;61961&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;61979&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62025&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61974&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;61977&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;62013&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62026&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;62035&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;62036&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;61986&quot;}},&quot;id&quot;:&quot;61980&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62027&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;62017&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62028&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;61985&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;62012&quot;}},&quot;id&quot;:&quot;62016&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;62012&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;62013&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;62014&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;62016&quot;}},&quot;id&quot;:&quot;62015&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;61970&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;61973&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;62022&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;61975&quot;}},&quot;id&quot;:&quot;61974&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62020&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;62029&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;}],&quot;root_ids&quot;:[&quot;62037&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.0&quot;}}';
                  var render_items = [{"docid":"2825a00f-0de3-4f51-bebf-b5a8c9a1a01a","root_ids":["62037"],"roots":{"62037":"392cf5a1-dcbd-4490-89ca-a80a64f96a4a"}}];
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