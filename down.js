(function($) {
  $.fn['downGalery'] = function (imgList) {
    var bgGalaryContainerClassName = 'background-galery-container';
    var galeryIMGClassName = 'galery-img';
    var arrowDownClassName = 'arrow-down';
    var arrowDown = $('.' + arrowDownClassName);
    var bgGalaryContainer = $('.' + bgGalaryContainerClassName);
    var galeryIMG; 
    var imgHeight = window.innerHeight > 600 ? window.innerHeight : 600;
    var imgPath = "";
    var imgTopPostionList = [];

    function initBgGaleryContainer(imgList) {
      for(var i = 0; i < imgList.length; i++) {
        var tempBgHTML = '<div class="background-galery"><img class="'
                       + galeryIMGClassName
                       + '" src="'
                       + imgPath
                       + imgList[i]
                       + '" height='
                       + imgHeight
                       + 'px"></div>';
        bgGalaryContainer.append(tempBgHTML);
        galeryIMG = $('.' + galeryIMGClassName);
      }
      getIMGTopPosition();
    }
    
    initBgGaleryContainer(imgList);

    function getIMGTopPosition() {
      imgTopPostionList = [];
      $('.background-galery').each(function(){
        imgTopPostionList.push($(this).offset().top);
      });
    }

    function slideDown() {
      var currentScrollY = window.scrollY ;
      for(var i=0; i < imgTopPostionList.length - 1; i++) {
        if(currentScrollY < imgTopPostionList[0])
          $('body').animate({scrollTop: imgTopPostionList[1]}, 500);
        else if(currentScrollY >= imgTopPostionList[i] && currentScrollY < imgTopPostionList[i+1])
          $('body').animate({scrollTop: imgTopPostionList[i+1]}, 500);
      }
    }

    arrowDown.click(function(){
      slideDown();
    }); 

    $(window).resize(function(){
      var imgHeight = window.innerHeight > 600 ? window.innerHeight : 600;
      galeryIMG.each(function(){
        $(this).css('height', imgHeight);
      });
      getIMGTopPosition();
    });
  }
}(window.jQuery));


