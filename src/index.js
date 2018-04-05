import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'

class App extends React.Component {
  render() {
    return (
    <Header />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
