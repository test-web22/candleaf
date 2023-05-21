"use strict"
document.addEventListener('click', documentClick);
function documentClick(e) {
	const targetItem = e.target;
	const burgerOpen = document.querySelector('body');
	if (targetItem.closest('.icon-menu')) {
		burgerOpen.classList.toggle('menu-open');
	}
	if (targetItem.closest('.menu, .header__logo, .header__button')) {
		burgerOpen.classList.remove('menu-open');
	}
}
function myreadMoreFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myReadBtn");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "See more";
		moreText.style.display = "none";
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "See less";
		moreText.style.display = "inline";
	}
}