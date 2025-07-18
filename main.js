document.addEventListener('DOMContentLoaded', function() {
	initCustomSlider();
});

// Бургер меню
const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  burger.classList.toggle('open');
});



function initCustomSlider() {
	const slider = document.querySelector('.intro__bottom');
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener('mousedown', (e) => {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener('mouseleave', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mouseup', () => {
		isDown = false;
		slider.classList.remove('active');
	});
	slider.addEventListener('mousemove', (e) => {
		if (!isDown)
			return;
		e.preventDefault();
		e.stopPropagation();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 2; //Ускорение, чтобы слайдер быстрее пролистывался
		slider.scrollLeft = scrollLeft - walk;
	});
}