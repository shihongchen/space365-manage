import React,{useState,useEffect} from 'react'
import { Table, Button, Modal, Form, Input, message,Radio } from 'antd';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { ExclamationCircleOutlined} from '@ant-design/icons';
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
          {
            title: '操作',
            dataIndex: '',
            key: 'x',
            render: (text, record, index) => (
                <div>
                     <Button type="link"  onClick={()=>editHanlder(record)}>编辑</Button>
                     <Button type="link" onClick={()=>delHanlder(record.key)}>删除</Button>
                </div>
            ),
          },
      ];
   

    const [data,setData] = useState()
    const [isEdit,setIsEdit] = useState(false)
    const [k,setK] = useState('')

    const [visible, setVisible] = useState(false);

    const layout = {
            labelCol: { span: 6 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
    const [form] = Form.useForm();
  
    const onFinish = values => {
        if(isEdit){
            let localList = JSON.parse(sessionStorage.getItem('dataList'))
            let newData = localList.reduce((res, el) => {
                if(el.key === k) {
                    el = {...el,...values}
                }
                return [...res, el];
            }, []);
            sessionStorage.setItem('dataList',JSON.stringify(newData))
            setData(newData)
        }else{
            sessionStorage.setItem('dataList', JSON.stringify([{dateNow:moment().fromNow(),key:nanoid(),...values}, ...data]))
        }
        form.resetFields();
        setVisible(false);
        message.success('操作成功');
    };
    const onReset = () => {
        form.resetFields();
        setVisible(false);
    };
    useEffect(() => {
        let localList = sessionStorage.getItem('dataList')
        localList ?  setData([...JSON.parse(localList)]) : setData([]);
    },[visible])
    const delHanlder = (id)=>{
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleOutlined />,
            content: '是否确定删除?',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
                let localList = JSON.parse(sessionStorage.getItem('dataList'))
                let newData = localList.filter(item=>item.key !== id )
                sessionStorage.setItem('dataList',JSON.stringify(newData))
                setData(newData)
                message.error('删除成功');
            }
        })
    }
    const editHanlder = (item)=>{
        
        setVisible(true);
        setK(item.key)
        form.setFieldsValue({
            ...item
        });
        setIsEdit(true)

    }
    return (
        <>
        
            <div className="userTitleBox" >
                <h2>人员管理</h2>
                <Button onClick={()=>{
                    setVisible(true)
                     setIsEdit(false)}
            } type="primary">+ 添加人员</Button>
             </div>
            <Table columns={columns} dataSource={data} />
            <Modal
                title="添加人员"
                visible={visible}
                footer={null}
                closable={false}
            >
                <Form {...layout} form={form} layout="vertical"  name="control-hooks" onFinish={onFinish}>
                    <Form.Item name="name" label="姓名" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label="邮箱" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="phone" label="手机" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="work" label="工号" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="job" label="职务" >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="isLogin"
                        label="登录"
                    >
                        <Radio.Group>
                            <Radio.Button value="N">不允许</Radio.Button>
                            <Radio.Button value="Y">允许</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item className='btnGroup' {...tailLayout}>
                         <Button type="primary" style={{marginRight:'10px'}} htmlType="submit">确认</Button>
                        <Button htmlType="button" onClick={onReset}>取消</Button>
                    </Form.Item>
                    </Form>
            </Modal>
    </>
  )
}
   
  
 


