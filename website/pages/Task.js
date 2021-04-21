import React from 'react';
import { Button, Form, Input, Popover } from 'antd';
import '../assets/index.css';

const Task = () => {
	
	const add = () => {
		console.log("add Task")
	}
	
	const layout = {
		labelCol: { span: 8 },
		wrapperCol: { span: 16 },
	};
	
	const onFinish = (values) => {
		console.log('Success:', values);
		add()
	};
	
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	
	const content = (
	<Form
		{...layout}
		name="basic"
		onFinish={onFinish}
		onFinishFailed={onFinishFailed}
	>
		<Form.Item
			label="Title"
			name="title"
		>
			<Input />
		</Form.Item>
	</Form>
	)
	return (
		<>
			<Popover content={content} trigger="click">
				<Button type="primary">New Task</Button>
			</Popover>
		</>
	)
};
export default Task;
