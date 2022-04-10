import React,{useState,useEffect} from 'react'
import { Table, Button, Modal, Form, Input, message,Radio } from 'antd';
import { nanoid } from 'nanoid';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './index.css'
moment.locale('zh-cn')



export default () => {
    const columns = [
        {
          title: '序号',
          dataIndex: 'index',
          key: 'index',
          render: (text,record,index) => `${index+1}`,
        },
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '邮箱',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: '手机号',
          key: 'phone',
          dataIndex: 'phone',
        },
         {
          title: '职务',
          key: 'job',
          dataIndex: 'job',
        },
        {
          title: '工号',
          key: 'work',
          dataIndex: 'work',
        },
        {
            title: '登录次数',
            key: 'loginTime',
            dataIndex: 'loginTime',
            render: (text, record, index) => {
                if (record.isLogin || record.isLogin == 'Y' ) {
                    return '允许' // 次数 
                } else {
                    return '不允许'
                }
            },
        },
        {
            title: '最近登录时间',
            key: 'dateNow',
            dataIndex: 'dateNow',
          },
      ];
   

    const [data,setData] = useState()

    const [visible, setVisible] = useState(false);

    const layout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const [form] = Form.useForm();
  
    const onFinish = values => {
        sessionStorage.setItem('dataList', JSON.stringify([{dateNow:moment().fromNow(),key:nanoid(),...values}, ...data]))
        message.success('添加成功');
        form.resetFields();
        setVisible(false);
    };
    const onReset = () => {
        form.resetFields();
        setVisible(false);
    };
    useEffect(() => {
        let localList = sessionStorage.getItem('dataList')
        console.log(JSON.parse(localList),'123');
        localList ?  setData([...JSON.parse(localList)]) : setData([]);
    },[visible])
  
    return (
        <>
            <div className="userTitleBox" >
                <h2>人员管理</h2>
                <Button onClick={()=>setVisible(true)} type="primary">+ 添加人员</Button>
             </div>
            <Table columns={columns} dataSource={data} />
            <Modal
                title="添加人员"
                visible={visible}
                footer={null}
                closable={false}
            >
                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                    <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="邮箱" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="phone" label="手机" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="work" label="工号" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="job" label="职务" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="isLogin"
                        label="登录"
                        rules={[{ required: true}]}
                    >
                        <Radio.Group>
                            <Radio.Button value="N">不允许</Radio.Button>
                            <Radio.Button value="Y">允许</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" style={{marginRight:'10px'}} htmlType="submit">确认</Button>
                        <Button htmlType="button" onClick={onReset}>取消</Button>
                        {/* <Button type="link" htmlType="button" onClick={onFill}>
                        Fill form
                        </Button> */}
                    </Form.Item>
                    </Form>
            </Modal>
    </>
  )
}
   
  
 


