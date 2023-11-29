/*=============== SEARCH ===============*/

const searchButton = document.getElementById('search-button'),
	searchClose = document.getElementById('search-close'),
	searchContent = document.getElementById('search-content');

/*=============== SEARCH SHOW ===============*/

if (searchButton) {
	searchButton.addEventListener('click', () => {
		searchContent.classList.add('show-search');
	});
}

/*=============== SEARCH HIDDEN ===============*/

if (searchClose) {
	searchClose.addEventListener('click', () => {
		searchContent.classList.remove('show-search');
	});
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button'),
	loginClose = document.getElementById('login-close'),
	loginContent = document.getElementById('login-content');

/*=============== LOGIN SHOW ===============*/

if (loginButton) {
	loginButton.addEventListener('click', () => {
		loginContent.classList.add('show-login');
	});
}

/*=============== LOGIN HIDDEN ===============*/

if (loginClose) {
	loginClose.addEventListener('click', () => {
		loginContent.classList.remove('show-login');
	});
}

// shadow header

// const shadowHeader = () => {
// 	const header = document.getElementById('header');
// 	this.scrollY >= 50
// 		? header.classList.add('shadow-header')
// 		: header.classList.remove('shadow-header');
// };

// window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
	spaceBetween: -24,
	centeredSlides: true,
	loop: true,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	// breakpoints: {
	// 	1220: spaceBetween - 32,
	// },
});

/*=============== FEATURED SWIPPER ===============*/

let swiperFeatured = new Swiper('.featured__swiper', {
	spaceBetween: 16,
	centeredSlides: true,
	loop: true,
	grabCursor: true,
	slidesPerView: 'auto',
	centeredSlides: 'auto',
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		1150: {
			slidesPerView: 4,
			centeredSlides: false,
		},
	},
});

/*=============== NEW SWIPPER ===============*/

let swiperNew = new Swiper('.new__swiper', {
	spaceBetween: 16,
	centeredSlides: true,
	loop: true,

	slidesPerView: 'auto',

	breakpoints: {
		1150: {
			slidesPerView: 4,
			centeredSlides: false,
		},
	},
});

/*=============== Stars SWIPPER ===============*/

let swiperStars = new Swiper('.testimonial__swiper', {
	spaceBetween: 16,
	centeredSlides: 'auto',
	loop: true,
	grabCursor: true,

	slidesPerView: 'auto',

	breakpoints: {
		1150: {
			slidesPerView: 4,
			centeredSlides: false,
		},
	},
});

/*=============== Show Scroll up  ===============*/
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up');
	this.scrollY >= 350
		? scrollUp.classList.add('show-scroll')
		: scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
	const scrollDown = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector(
				'.nav__menu a[href*=' + sectionId + ']'
			);

		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link');
		} else {
			sectionsClass.classList.remove('active-link');
		}
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== theme dark/light  ===============*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});
