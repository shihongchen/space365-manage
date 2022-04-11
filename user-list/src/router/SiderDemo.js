import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Breadcrumb,Image } from 'antd';
import {routes} from './config'
import {
  BorderBottomOutlined,
  UsergroupDeleteOutlined,
  ControlOutlined,
  ProfileOutlined,
  FundOutlined,
  SettingOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import {Route, Switch,Redirect ,Link} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout  className="site-layout" style={{ minHeight: '100vh' }}>
            <Header className="site-layout-background" style={{ padding: 0 }} >
                    <div className="headerContent">
                    <BorderBottomOutlined style={{color:"#333",fontSize:'22px'}} />
                        <div className="user">
                         <span>用户1</span>
                        <Image
                            width={40}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                       </div>
                    </div>
            </Header>
        <Layout>
          <Sider  collapsed={true}>
            <Menu className='antsllider' theme="dark" defaultSelectedKeys={['3']} mode="inline">
                <Menu.Item key="3"  icon={<UsergroupDeleteOutlined />}><Link to="/user" >用户</Link></Menu.Item>
                <Menu.Item key="4" icon={<DatabaseOutlined />} ><Link to="team4" >空调</Link></Menu.Item>
                <Menu.Item key="5" icon={<ControlOutlined />} ><Link to="team5">设备</Link></Menu.Item>
                <Menu.Item key="6" icon={<ProfileOutlined />} ><Link to="team6">业务报表</Link></Menu.Item>
                <Menu.Item key="7" icon={<FundOutlined />} ><Link to="team7">系统报表</Link></Menu.Item>
                <Menu.Item key="8" icon={<SettingOutlined />} ><Link to="team8">系统管理</Link></Menu.Item>
            </Menu>
          </Sider>
                
          <Content style={{ margin: '5px 12px 0px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                {
                  routes.map((item) => {
                    return <Route key={item.path} path={item.path} component={item.component}></Route>
                  })
                }
                <Redirect from='/' to='/user' exact></Redirect>
              </Switch>
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;