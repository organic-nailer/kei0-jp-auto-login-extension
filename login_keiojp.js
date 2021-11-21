const USER_ID_KEY = 'keio-userid';
const PASSWORD_KEY = 'keio-password';

window.addEventListener("load", () => {
	const loginForm = document.getElementById("login");
	const usernameForm = document.getElementById("username");
	const passwordForm = document.getElementById("password");
	chrome.storage.local.get([USER_ID_KEY,PASSWORD_KEY], (value) => {
		if(value.hasOwnProperty(USER_ID_KEY) && value.hasOwnProperty(PASSWORD_KEY)){
			usernameForm.value = value[USER_ID_KEY];
			passwordForm.value = value[PASSWORD_KEY];
			
			const loginButtons = loginForm.getElementsByClassName("form-button");
			if(loginButtons.length > 0) {
				loginButtons[0].click();
			}
		}
	});
});
