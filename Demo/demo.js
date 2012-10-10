(function($) {

     var map;

     function init() {
         map = new OpenLayers.Map({
                div: 'map',
                allOverlays: true,
                maxExtent: new OpenLayers.Bounds(
                   1549471.9221, 6403610.94, 1550001.32545, 6404015.8)
            });

         // give the features some style
         var styles = new OpenLayers.StyleMap({
                'default': {
                    strokeWidth: 2
                },
                'select': {
                    strokeColor: '#09c',
                    strokeWidth: 4
                }
            });

        // add rules from the above lookup table
           styles.addUniqueValueRules('default', 'RP_TYPE', {
                     10: {
                         strokeColor: '#000',
                         strokeWidth: 2
                     },
                     12: {
                         strokeColor: '#222',
                         strokeWidth: 2
                     },
                     14: {
                         strokeColor: '#444',
                         strokeWidth: 2
                     },
                     16: {
                         strokeColor: '#666',
                         strokeWidth: 2
                     },
                     18: {
                         strokeColor: '#888',
                         strokeWidth: 2
                     },
                     19: {
                   strokeColor: '#666',
                   strokeWidth: 1
                  }
           });

           var vectors = new OpenLayers.Layer.Vector('Lines', {
                     strategies: [new OpenLayers.Strategy.Fixed()],
                     protocol: new OpenLayers.Protocol.HTTP({
                            url: 'http://openlayers.org/dev/examples/data/roads.json',
                            format: new OpenLayers.Format.GeoJSON()
                        }),
                     styleMap: styles
                 });

           map.addLayer(vectors);
           map.addControl(new OpenLayers.Control.LayerSwitcher());
           map.zoomToMaxExtent();
       }

       init();
})(jQuery);
