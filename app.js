$(document).ready(function(){
  //$('.nav-menu').css('width', '50%');

   $( '#nav-menu-leading:first' ).append( $( "<span id='project-name'>  / HYPER HEADPHONES</span>" ) );
  //  $('a:first').text('/ hyper headphones');



// ** Project Selectors ** //

//hover function on Project Selectors : Ques & Ans
$( "li" ).hover(
  function() {
    $(this).css({"color":"#4A90E2"});
  }, function() {
    $(this).css({"color":"#9B9B9B"});
  }
);


//click function for Project Selectors

$('.project-filter').click(function(){
  var category = $(this).attr('id');
  // alert(category);

  if(category == 'all'){
    $('.projects-left , .projects-right').addClass('hide');
    setTimeout(function(){
      $('.projects-left , .projects-right').removeClass('hide');
    }, 300);
  } else {
    $('.projects-left , .projects-right').addClass('hide');
    setTimeout(function(){
      $('.'+category).removeClass('hide');
    }, 300);
  }
});


//inside project

$('.image-scroll').scroll(function(){
  var scroll_top = $(this).scrollTop();

  $('#feedback').text('currently at pos:' + scroll_top);
});




});
