$(document).ready(function(){
      // Add scrollspy to <body>
      $('body').scrollspy({target: ".navbar", offset: 50});   

      // Add smooth scrolling on all links inside the navbar
      $("#myNavbar a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
            });
          }  // End if
        });
      });


 $(document).ready(function(){
              $('[data-toggle="popover"]').popover();   
          });

            $(function() {
            $('.pop').on('click', function() {
            $('.imagepreview').attr('src', $(this).find('.img1').attr('src'));
            $('#imagemodal').modal('show');
            $('#imagemodal2').modal('hide');   
              });   
            });




$(document).ready(function(){
              $('[data-toggle="popover"]').popover();   
          });

            $(function() {
            $('.pop2').on('click', function() {
            $('.imagepreview2').attr('src', $(this).find('.img2').attr('src'));
            $('#imagemodal2').modal('show');
            $('#imagemodal').modal('hide');     
              });   
            });

$(document).ready(function(){
              $('[data-toggle="popover"]').popover();   
          });

            $(function() {
            $('.pop3').on('click', function() {
            $('.imagepreview3').attr('src', $(this).find('.img3').attr('src'));
            $('#imagemodal3').modal('show');
            $('#imagemodal4').modal('hide');     
              });   
            });
$(document).ready(function(){
              $('[data-toggle="popover"]').popover();   
          });

            $(function() {
            $('.pop4').on('click', function() {
            $('.imagepreview4').attr('src', $(this).find('.img4').attr('src'));
            $('#imagemodal4').modal('show');
            $('#imagemodal3').modal('hide');     
              });   
            });





$(function(){
    // Enables popover
    $("[data-toggle=popover]").popover();
});
