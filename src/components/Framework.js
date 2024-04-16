import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingOutlined,
    UserOutlined,
    HistoryOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, ConfigProvider, Divider, Typography, Avatar } from 'antd';
// import MyDropzone from './MyDropzone.js';
import AntdDropzone from '../components/AntdDropzone.js'
import Table from '../components/Table.js'
import Request from '../components/request.jsx'

const { Title } = Typography;
const { Header, Sider, Content, Footer } = Layout;


const titleProps = {
    ellipsis: {
        rows: 1,
        // suffix: "***",
    },
    level: 3,
    type: "warning",
    // code: true,
}


function Framework() {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedMenu, setSelectedMenu] = useState('0'); // 默认选中首页

    // 根据选中的 Menu 项渲染不同的内容
    const renderContent = () => {
        switch (selectedMenu) {
            case '0':
                return <AntdDropzone />;
            case '1':
                return <div>用户中心内容</div>;
            case '2':
                return <Table />;
            case '3':
                return <div>设置</div>;
            default:
                return <div>首页内容</div>;
        }
    };


    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible={false} collapsed={collapsed} defaultCollapsed={true} width={270}>
                <div className="demo-logo-vertical" />
                {/* <Title {...titleProps} className='title mt-3 text-slate-100'>鲁棒性智能车牌识别系统</Title> */}
                {collapsed ?
                    <img src="/images/BUPTlogo.png" alt="BUPT-LOGO" style={{ width: '60px', height: '60px', marginLeft: '10px' }} /> :
                    <p className='font-mono text-1.5xl mt-3 mb-1 ml-1 mr-1 font-black text-gray-400 text-center'>鲁棒性智能车牌识别系统</p>
                }


                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['0']}
                    onSelect={({ key }) => { setSelectedMenu(key) }}
                    items={[
                        {
                            key: '0',
                            icon: <HomeOutlined />,
                            label: '首页',

                        },
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: '用户中心',
                        },
                        {
                            key: '2',
                            icon: <HistoryOutlined />,
                            label: '历史记录',
                        },
                        {
                            key: '3',
                            icon: <SettingOutlined />,
                            label: '设置',
                        },
                    ]}
                />
            </Sider>
            <ConfigProvider
                theme={{
                    token: {
                        // fontSize: 30,
                        // // Seed Token，影响范围大
                        // colorPrimary: '#00b96b',
                        // borderRadius: 2,

                        // // 派生变量，影响范围小
                        // colorBgContainer: '#f6ffed',
                        components: {
                            Layout: {
                                footerBg: "#001529",
                                footerPadding: "24px 100px",
                                bodyBg: "#001529"

                            },
                            Content: {

                            },
                            Footer: {
                                footerBg: "#001529",
                                footerPadding: "24px 100px",
                                bodyBg: "#001529"
                            }
                        },

                    },
                }}
            >
                <Layout style={{ display: 'flex', flexDirection: 'column' }}>

                    <Header
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center', // 垂直居中对齐
                            padding: '0 0px', // 根据需要调整内边距
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                        <div className="text-center mt-3 mb-3 mr-5">
                            <Avatar
                                size={'large'} // 设置头像具体像素大小为64
                                style={{ backgroundColor: '#ffd700' }} // 设置头像背景颜色为灰色
                                className="font-mono text-2xl font-black text-blue-600 inline-block align-middle" // 应用Tailwind CSS类
                            >
                                A
                            </Avatar>
                        </div>
                    </Header>

                    <Content
                        style={{
                            flex: 1,
                            margin: '24px 16px',
                            padding: 50,
                            paddingBottom: '100px', // 增加底部边距以避免与 Footer 重叠
                            minHeight: 550,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {renderContent()}
                    </Content>

                    <Footer style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src="/images/footlogo.png" alt="BUPT-LOGO" style={{ marginBottom: '0px' }} />
                        <Divider />
                        Robust Intelligent System @{new Date().getFullYear()} Created by CodingPoetss
                    </Footer>

                </Layout>
            </ConfigProvider>
        </Layout>
    );
};
export default Framework;