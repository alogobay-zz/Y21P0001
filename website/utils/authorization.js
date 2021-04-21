/* eslint-disable import/prefer-default-export */
export const accessTokenSetup = (res) => {
	const { accessToken, profileObj } = res;
	if (accessToken) {
		localStorage.setItem('ACCESS_TOKEN', JSON.stringify(accessToken));
	}
	if (profileObj) {
		localStorage.setItem('PROFILE', JSON.stringify(profileObj));
	}
}