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
//========================================================================================================================================================
$(document).ready(function() {
	$('body').on('click', '.number-minus, .number-plus', function(){
		var $row = $(this).closest('.number');
		var $input = $row.find('.number-text');
		var step = $row.data('step');
		var val = parseFloat($input.val());
		if ($(this).hasClass('number-minus')) {
			val -= step;
		} else {
			val += step;
		}
		$input.val(val);
		$input.change();
		return false;
	});
	$('body').on('change', '.number-text', function(){
		var $input = $(this);
		var $row = $input.closest('.number');
		var step = $row.data('step');
		var min = parseInt($row.data('min'));
		var max = parseInt($row.data('max'));
		var val = parseFloat($input.val());
		if (isNaN(val)) {
			val = step;
		} else if (min && val < min) {
			val = min;	
		} else if (max && val > max) {
			val = max;	
		}
		$input.val(val);
	});
});