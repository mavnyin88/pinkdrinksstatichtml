// /* Slideshow */
// var slideIndex = 0;
// startSlideShow();

// function startSlideShow(){
// 	var i;
// 	// var slides = document.querySelectorAll(".hero-image");
// 	var slides = document.getElementsByClassName("hero-image");
// 	for(i=0;i<slides.length;i++){
// 		console.log(slides[i]);
// 		slides[i].style.display = "none";
// 	}
// 	slideIndex++
// 	if(slideIndex > slides.length){
// 		slideIndex = 1;
// 	}
// 	slides[slideIndex-1].style.display = "block";
// 	setTimeout(startSlideShow,2500);
// }
startSlideShow();
var counter = 1;

function startSlideShow(){

	if (counter > 7){
		counter = 1;
	}
	else{
	// document.getElementsByTagName("body")[0].removeAttribute("id","");
	document.getElementsByTagName("body")[0].setAttribute("id","hero-img-"+(counter++));
	}
	setTimeout(startSlideShow,3000);
}


