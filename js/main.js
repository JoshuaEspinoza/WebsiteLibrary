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
