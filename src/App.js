import React, { Component } from 'react';
// import logo from './assets/images/logo.svg';

import './assets/css/index.css'

// 引入Home组件
// import Home from './components/Home'
// import News from './components/News'
// import D3demo1 from './components/D3demo1'
// import D3demo2 from './components/D3demo2'
// import D4demo1 from './components/D4demo1'
// import D5demo1 from './components/D5demo1'
// import D5demo2 from './components/D5demo2'
// import D5demo3 from './components/D5demo3'
// import D6demo1 from './components/D6demo1'
import D6demo2 from './components/D6demo2'
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
        {/* <h3>这是第3节课demo2</h3>
        <D3demo2 /> */}
        {/* <h3>这是第4节课demo1</h3>
        <D4demo1 /> */}

        {/* <h3>这是第5节课demo1</h3>
        <D5demo1 /> */}

        {/* <h3>这是第5节课demo2</h3>
        <D5demo2 /> */}

        {/* <h3>这是第5节课demo3</h3>
        <D5demo3 /> */}

        {/* <h3>这是第6节课demo1</h3>
        <D6demo1 /> */}

        <h3>这是第6节课demo2</h3>
        <D6demo2 />
      </div>
    );
  }
}

export default App;
