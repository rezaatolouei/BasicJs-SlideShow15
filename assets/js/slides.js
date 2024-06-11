var slides = document.getElementsByClassName("myslides")
var slideposition = 0

function showslide(indexslide){
    for(var i=0; i < slides.length; i++){
        var slideWidth = slides[i].clientWidth
        slides[i].style.transform = `translateX(-${slideWidth * indexslide}px)`
    }
}
function right(){
    slideposition = (slideposition + 1) % slides.length;
    showslide(slideposition)
}
function left(){
    slideposition = (slideposition - 1 + slides.length) % slides.length;
    showslide(slideposition)
}