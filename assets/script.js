const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Insert dots into the DOM
let dots_container = document.querySelector(".dots");
// one dot created per slide
for(let index_slide=0; index_slide < slides.length; index_slide++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if (index_slide === 0) dot.classList.add("dot_selected"); // current selected dot
	dots_container.appendChild(dot);
}

// All global HTML elements
let dots = document.querySelectorAll(".dot");
let current_img = document.querySelector(".banner-img");
let current_tagline = document.querySelector("#banner p");


// Function to show the slide
function showSlide(current_slide) {
	// dots update
	for(let index_slide=0; index_slide < slides.length; index_slide++) {
		dots[index_slide].classList.remove("dot_selected"); // reset dot
		if (index_slide === current_slide) dots[index_slide].classList.add("dot_selected"); // current selected dot
	}
	// img update
	current_img.src = "./assets/images/slideshow/" + slides[current_slide]["image"];
	// tagline update
	current_tagline.innerHTML = slides[current_slide]["tagLine"];
}

// Slider initialisation
let current_index = 0; // index current slide
showSlide(current_index);


// Event listener for left arrow
document.querySelector("#banner .arrow_left").addEventListener("click", () => {
	current_index--;
	if (current_index < 0) current_index = slides.length - 1; // infinite loop of slider

	showSlide(current_index);
});

// Event listener for right arrow
document.querySelector("#banner .arrow_right").addEventListener("click", () => {
	current_index++;
	if (current_index >= slides.length) current_index = 0; // infinite loop of slider

	showSlide(current_index);
});


