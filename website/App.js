import React from 'react';
import withAuthorize from './layout/Authorization';
import Task from './pages/Task';
import BasicLayout from './layout/BasicLayout'

const App = () => <BasicLayout><Task /></BasicLayout>; // need router-view

export default withAuthorize(App);
