import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import SiteHeader from './components/header'

class App extends React.Component {
  render() {
    return (
    <SiteHeader />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
