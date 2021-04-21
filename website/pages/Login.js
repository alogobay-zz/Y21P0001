import React from 'react';
import { GoogleLogin } from 'react-google-login';
import PropTypes from 'prop-types';
import { CLIENT_ID } from '../utils/constans';
import { accessTokenSetup } from '../utils/authorization';

const Login = ({ setIsAuthorize }) => {
	const onSuccess = (res) => {
		setIsAuthorize(true)
		accessTokenSetup(res)
	}
	
	const onFailure = (res) => {
		setIsAuthorize(false)
		console.log("Fail", res)
	}
	
	return (
		<div className="w-full">
			<GoogleLogin
				clientId={CLIENT_ID}
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy='single_host_origin'
				isSignedIn
			/>
		</div>
	);
}

Login.propTypes  = {
	setIsAuthorize: PropTypes.func.isRequired
}
export default Login;
