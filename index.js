//animation
TweenMax.from('.quote', 1, {opacity:0, delay:4}); // Voor de quote on the first page

//Pop up
$(window).load(function () {
    $(".trigger").click(function(){
       $('.popup').show();
    });
    $('.popupCloseButton').click(function(){
        $('.popup').hide();
    });
});

//Book animation
var slideIndex = [1];
var slideId = ["mySlides1"]
showDivs(1, 0);

function plusDivs(n, no) {
  showDivs(slideIndex[no] += n, no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
