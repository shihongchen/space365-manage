import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Breadcrumb,Image } from 'antd';
import {routes} from './config'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
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
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User"> */}
                    <Menu.Item icon={<UserOutlined />} key="3"><Link to="/user" >人员列表</Link></Menu.Item>
              {/* <Menu.Item key="4"><Link to="/user/bill">Bill</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/user/alex">Alex</Link></Menu.Item> */}
            {/* </SubMenu> */}
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6"><Link to="/team/team1" >Team 1</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/team/team2">Team 2</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} >
               
                    <div className="headerContent">
                        <Breadcrumb style={{ margin: '0 16px', fontSize:'18px' }}>
                            <Breadcrumb.Item style={{color: '#333'}}>人员列表/</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="user">
                         <span>用户1</span>
                        <Image
                            width={40}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                       </div>
                    </div>
                </Header>
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