require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
// import {render} from 'react-dom';
// import {connect} from 'react-redux';
// import '../styles/App.css';
import { Layout } from 'antd';
const { Header } = Layout;

class SiteHeader extends React.Component{
  render(){
    return (
      <Header className='post_header'>
       <div className='title'>
         <div className='logo'>
           Mike's HackerNews
         </div>
       </div>
     </Header>
    );
  }
}

export default SiteHeader;
