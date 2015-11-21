//disable default for page loading for a desktop
$('.hamburger').on('click', function( event ){
     event.preventDefault();
     $('.navigation').slideToggle();
});
