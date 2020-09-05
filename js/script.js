
const mobileMenu = document.querySelector('.navigation__left'),
	  mobileMenuImg = document.querySelector('.navigation__hamburger--ig'),
	  mobileMenuBackground = document.querySelector('.navigation');

mobileMenuImg.addEventListener('click', function () {

	mobileMenu.classList.toggle('hamburger-open');

	if(mobileMenu.classList.contains('hamburger-open')){
		mobileMenuImg.src = "img/icons/times.svg";
		mobileMenuBackground.style.position = 'fixed';
	} else {
		mobileMenuImg.src = "img/icons/bars.svg";
		mobileMenuBackground.style.position = 'absolute';
	}
});


const searchButton = document.querySelector('.navigation__buttons--search'),
	  searchInput = document.querySelector('.navigation__buttons--input');

searchButton.addEventListener('click', function () {
	searchInput.classList.toggle('search-visible');
});