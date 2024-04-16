import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import { Layout, theme } from 'antd';
const { Content, } = Layout;


const App = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <Layout>
            <Content
                className='box-border h-50 w-50 p-4 border-4'
            // style={{
            //     flex: 1,
            //     margin: '100px 400px',
            //     padding: 50,
            //     paddingBottom: '100px', // 增加底部边距以避免与 Footer 重叠
            //     minHeight: 200,
            //     background: colorBgContainer,
            //     borderRadius: borderRadiusLG,
            // }}
            >
                <Form
                    name="normal_login"
                    className="max-w-xs"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="float-right" href="#">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            Log in
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </Content>
        </Layout>

    );
};
export default App;