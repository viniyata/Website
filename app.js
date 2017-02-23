$(document).ready(function(){
  //$('.nav-menu').css('width', '50%');

  $('.drawer').drawer();


////////// ** Project Selectors ** /////////////

//hover function on Project Selectors -Ques & Ans
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


//////////////////////inside project////////////////////////


// when image changes, replace the text

//select the current active div


//  $('a:first').text('/ hyper headphones');



});

function changeText() {
  a = $(".swiper-slide-active");

  //find the text in that div
  text = a[0].children[1].innerHTML;

  $( '#intro-text-styling' ).text(text );
}


$('#answers').hover(function(){
  $('.dummy-hover').addClass("hover-active");
  },
  function () {
    $('.dummy-hover').removeClass("hover-active");
})
