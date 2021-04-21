/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import Login from '../pages/Login';

const withAuthorize = (WrappedComponent) => (props) => {
	const [isAuthorize, setIsAuthorize] = useState(false); // improve in future
	console.log(WrappedComponent)
	return isAuthorize ? <WrappedComponent {...props} /> : <Login setIsAuthorize={setIsAuthorize} />;
};

export default withAuthorize;
