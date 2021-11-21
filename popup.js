const inputUserid = document.getElementById('input_userid');
const inputPassword = document.getElementById('input_password');
const applyButton = document.getElementById('apply');

const USER_ID_KEY = 'keio-userid';
const PASSWORD_KEY = 'keio-password';

chrome.storage.local.get([USER_ID_KEY,PASSWORD_KEY], (value) => {
	if(value.hasOwnProperty(USER_ID_KEY)){
		inputUserid.value = value[USER_ID_KEY];
	}
	if(value.hasOwnProperty(PASSWORD_KEY)){
		inputPassword.value = value[PASSWORD_KEY];
	}
});

applyButton.addEventListener('click', () => {
	chrome.storage.local.set({
		[USER_ID_KEY]: inputUserid.value,
		[PASSWORD_KEY]: inputPassword.value
	});
	window.close();
});
