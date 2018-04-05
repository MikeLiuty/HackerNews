require('normalize.css/normalize.css');
require('styles/App.css');

import React,{Component} from "react"
// import {render} from 'react-dom'
// import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'

const { Header } = Layout;

class SiteHeader extends React.Component{

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(e){
    console.log('item is ',e.item,',key is ',e.key,',selectedKeys is ',e.selectedKeys);
    this.props.actions.ChangeContentCurrent(e.key);
  }

  render(){
    console.log('this.props is ',this.props);
    return (
     <Layout className='layout'>
      <Header className='header'>
         <div className='logo'>
           Mike's HackerNews
         </div>
          <Menu
            theme="dark"
            mode="horizontal"
            // selectedKeys={[this.props.sider.current]}
            onSelect={this.onSelect}
            defaultSelectedKeys={['1']}
            className='buttons'
          >
            <Menu.Item key="1">
              Home
            </Menu.Item>
            <Menu.Item key="2">Submit</Menu.Item>
        </Menu>
      </Header>
     </Layout>
    );
  }
}

export default SiteHeader;
