import { Layout, Menu, Breadcrumb } from 'antd';
import  UserList  from '../view/UserList'
  const Team1 = () => (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Team</Breadcrumb.Item>
          <Breadcrumb.Item>Team 1</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Team1</h2>
    </div>
  );
  const Team2 = () => (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Team</Breadcrumb.Item>
          <Breadcrumb.Item>Team 2</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Team 2</h2>
    </div>
  );
export const routes = [
    {
        path: '/user',
        component: UserList
    },
    {
        path: 'team4',
        component: Team1
    },
    {
        path: 'team5',
        component: Team2
    },
]
 