import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';

import './assets/css/index.css'

// 引入Home组件
// import Home from './components/Home'
// import News from './components/News'
// import D3demo1 from './components/D3demo1'
import D3demo2 from './components/D3demo2'
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <h2>你好,我是react 的根组件App.js。</h2>
        {/* <h3>这是demo1</h3>
        <Home />
        <h3>这是demo2</h3>
        <News /> */}
        {/* <h3>这是第3节课demo1</h3>
        <D3demo1 /> */}
        <h3>这是第3节课demo2</h3>
        <D3demo2 />
      </div>
    );
  }
}

export default App;
