// React是React的核心库
// ReactDOM是提供DOM相关的功能
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// 引入App.js 这个组件 注意组件名字的首字母必须大写
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
