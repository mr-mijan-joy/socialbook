
// 	// menubar script


// 	function menuBar() {
// 		var x = document.getElementsByClassName("menubar");

// 		if (x.style.display == "block") {
// 			x.style.display = "none";
// 		}else{
// 			x.style.display = "block";
// 		}
// 	}
// menuBar();


// 	let bar = document.getElementsByClassName("bar");
// 	let menu = document.getElementsByClassName("menubar");


// 	bar.onclick = function(){
// 		menu.classList.toggle("active");
// 	}


// 	const navSlide = () => {
// 		const bar = document.querySelector('.bar');
// 		const nav = document.querySelector('.menubar');

// 		bar.addEventListener('click',()=>{
// 			nav.classList.toggle('nav-active');
// 		})
// 	}

// navSlide();


// 	// search icon script


// 	var icon = document.getElementsById('searchicon');
// 	var searchBox = document.getElementsByClassName('search');

// 	icon.onclick = function myFunction() {
// 		searchBox.classList.toggle('active');
// 	}
// myFunction();


	// works section script

let flag=0;


function controller(x) {
	flag = flag + x;
	slideshow(flag);
}

slideshow();

function slideshow(num) {
	let slides = document.getElementsByClassName('slide');
	
	if (num == slides.length) {
		flag = 0;
		num = 0;
	}

	if (num < 0) {
		flag = slides.length-1;
		num = slides.length-1;
	}

	for (let y of slides) {
		y.style.display = "none";
	}

	slides[flag].style.display = "block";

}


	// testimonial section script

 
let index = 0;

function controll(a) {
	index = index + a;
	testimonial();
}

testimonial();

function testimonial(m) {
 	let clients = document.getElementsByClassName('clients');
 
 	if (index == clients.length) {
 		index=0;
 		m=0;
 	}
 	if (index < 0) {
 		index = clients.length-1;
 		m = clients.length-1;
 	}

 	for (let b of clients) {
 		b.style.display = "none";
 	}

 	clients[index].style.display = "block";
}