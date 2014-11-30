+(function(window, $){
    
    $(function(){
        $("#header").headroom({
            "offset": 205,
            "tolerance": 5,
            "classes": {
              "initial": "animated",
              "pinned": "flipInX",
              "unpinned": "flipOutX"
            }
         });
    });
    
}(window, jQuery));   


    
 