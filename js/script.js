(function($) {

  var sliderUl = $("div.slider").css("overflow","hidden").children("ul"),
      imgs = sliderUl.find("img"),
      imgWidth= imgs[0].width,
      imgsLen = imgs.length,
      current = 1,
      totalImgsWidth = imgsLen * imgWidth;


    $("#slider-nav").show().find("button").on("click", function() {
     var direction = $(this).data("dir");
        loc = imgWidth;
        
        (direction === "next") ? ++current : --current;
        if(current === 0) {
            current =imgsLen;
            loc = totalImgWidth -imgWidth;
            dirrection = "next";
        }else if ( current -1 === imgsLen ) {
            current = 1;
            loc=0;
        }
	transition( sliderUl, loc , direction );
    });
    function transition( container, loc, direction ) {
        var unit;
        
        if(direction && loc !== 0) {
            unit = (direction === "next") ? "-=" : "+=";
        }
        container.animate({
            "margin-left": unit ? (unit + loc) : loc
        });
        
    }
})(jQuery);
