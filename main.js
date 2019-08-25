$(document).ready(function(){
var slideshow = [] ;
for (var j = 0; j < 36 ; j++) {
    slideshow[j] = document.getElementById("slideshow"+(j+1));
    // console.log(slideshow);
    slideshow[j].currentSlideIndex = 1;
    showSlides(slideshow[j].currentSlideIndex, slideshow[j]);    
}

var slideshow2 = [] ;
for (var k = 0; k < 2 ; k++) {
    slideshow2[k] = document.getElementById("ss"+(k+1));
    console.log(slideshow2);
    // slideshow2[k].currentSlideIndex = 1;
    // showSlides(slideshow2[k].currentSlideIndex, slideshow2[k]);    
}


// var ss1 = document.getElementById("ss1");
// console.log(ss1);
// slideshow100.currentSlideIndex = 1;
// showSlides(slideshow100.currentSlideIndex, slideshow100);



// hide big slide by click on it
$('.mySlides').click(function(){
    var goal = $(this).parent();
    goal.hide();
});

// action of gallery links
var $gallery = $('.gallery');
$('.filter').click(function(){
    var category = $(this).attr('data-category');
    // $gallery.hide(400);
    // $('.'+category).show(400);
    switch(category){
        case 'box-1':
            $gallery.hide(400);
            $('.ordo-gallery').show(400);
            break;
        case 'box-2':
            $gallery.hide(400);
            $('.pishdabestani-gallery').show(400);
            break;
        case 'box-3':
            $gallery.hide(400);
            $('.football-gallery').show(400);
            break;
        case 'box-4':
            $gallery.hide(400);
            $('.heyat-gallery').show(400);
            break;
        }
});




function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
//   var captionText = document.getElementById("caption");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideshow.currentSlideIndex-1].alt;

}


});