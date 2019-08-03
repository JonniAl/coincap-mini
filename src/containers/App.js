import React from 'react';
import 'antd/dist/antd.css';
import '../App.css';
import Header from "../components/Header";
import Content from "./Content";
import {connect} from "react-redux";
import {loadDataCoins, updateDataCoins} from "../actions/TableActions";
import { Spin, Alert } from 'antd';

class App extends React.Component {


  componentDidMount() {
      this.props.fetchDataCoins('https://api.coincap.io/v2/assets');
      const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');
      pricesWs.onmessage = (msg) => {
          this.props.updateDataCoins(JSON.parse(msg.data));
      }
  }

    render() {

    return (
        <div className="App">
            <Header/>
            {(!this.props.isLoading && this.props.coins !== null) ? <Content coins={this.props.coins}/> :
                <Spin tip="Loading..."/>
            }
        </div>
    )
  }
}

const mapStateToProps = store => {
    return {
        coins: store.coinsData.coins,
        isLoading: store.coinsData.isLoading,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDataCoins: url => dispatch(loadDataCoins(url)),
        updateDataCoins: coins => dispatch(updateDataCoins(coins))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
