+function(window, $){
    
    $(function(){
        // headroom
//        $("#header").headroom({
//            "offset": 205,
//            "tolerance": 5,
//            "classes": {
//              "initial": "animated",
//              "pinned": "flipInX",
//              "unpinned": "flipOutX"
//            }
//        });
        
        // ui sticky
        $(".main.container .ui.sticky").sticky({
            offset: 190,
            context : "#show-top"
         });
        
        // setup sidebar
       $('#jingxuan .sidebar').sidebar('attach events', "#siderbar-btn");
       
    });
}(window, jQuery);