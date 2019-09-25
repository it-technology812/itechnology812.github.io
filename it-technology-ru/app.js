$(window).ready(function () {
  $('.loader').addClass('loaded');
});

window.ec = window.ec || Object();
window.ec.config = window.ec.config || Object();
window.ec.config.navigation_scrolling = "DISABLED";

// if ($(window).width() < 1024) {
//   console.log('less than 1024')
// }
// else {
//   $('.main .item:not(.out)').tilt({
//     glare: true,
//     maxGlare: .1,
//     maxTilt: 3
//   });
//   console.log('more than 1024')
// }

function openProduct(pid) {
  Ecwid.openPage('product', {'id': pid});
}

$.get( "https://app.ecwid.com/api/v3/12987548/products?token=public_RqsLwYjCFdSBsnCPCytnVcybZ6vzh1if", function( data ) {
  console.log( "Data Loaded: " + data );
});

(function($) {
  $.fn.writeText = function(content) {
      var contentArray = content.split(""),
          current = 0,
          elem = this;
      setInterval(function() {
          if(current < contentArray.length) {
              elem.text(elem.text() + contentArray[current++]);
          }
      }, 50);
  };
  
})(jQuery);

$(".loader p").writeText("it-techology");