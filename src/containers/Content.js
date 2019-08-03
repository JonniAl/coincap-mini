import React from 'react'
import { Table, Row, Col} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Market Cap',
        dataIndex: 'marketCap',
    },
    {
        title: 'VWAP(24Hr)',
        dataIndex: 'vwap',
    }
];

class Content extends React.Component {
    render() {
        const coins = [...this.props.coins];
        const data = coins.sort((a, b) => (a.marketCap > b.marketCap) ? -1 : 1);
        data.splice(14, data.length - 15);
        let newData = data.map((currElement, index) => ({
            key: index,
            name: `${currElement.name}`,
            price: `${Math.round(currElement.priceUsd * 100) / 100}`,
            marketCap: `${Math.round(currElement.marketCapUsd * 100) / 100}`,
            vwap: `${Math.round(currElement.vwap24Hr * 100) / 100}`
        }));

        return (
            <Row>
                <Col span={14} offset={5}>
                    <Table bordered={true} pagination={false} size={"middle"} columns={columns} dataSource={newData}/>
                </Col>
            </Row>
        )
    }
}

export default Content;
