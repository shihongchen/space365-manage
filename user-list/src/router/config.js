import { Layout, Menu, Breadcrumb } from 'antd';
import  UserList  from '../view/UserList'
  const Tom = () => (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          {/* <Breadcrumb.Item>Tom</Breadcrumb.Item> */}
      </Breadcrumb>
      <h2>user</h2>
    </div>
  );
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
        path: '/team/team1',
        component: Team1
    },
    {
        path: '/team/team2',
        component: Team2
    },
]
 