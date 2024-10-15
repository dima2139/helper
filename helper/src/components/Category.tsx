import { List } from 'antd';

function Category(props: any) {
    return (
    <div>
        <img src={props.props.img} alt="Pic" width="50" height="40"></img>
        <List
            size="large"
            bordered
            dataSource={props.props.services}
            renderItem={(item:any) => <List.Item>{item}</List.Item>}
        />
    </div>
    );
  }

export default Category