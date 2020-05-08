	// جزء السلايد بتاع لوجوهات الشركاء
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});
// نهاية جزء السلايد بتاع لوجوهات الشركاء

// مربع (أهلا بيك... احنا هنا لمساعدتك) :
function myFunction() {
  var x = document.getElementById("myHelp");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
//  نهاية مربع (أهلا بيك... احنا هنا لمساعدتك) :