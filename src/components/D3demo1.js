import React from 'react';

/*
react绑定属性注意：

    1. class要换成className

    2. for要换成 htmlFor
    3.
    style:

           <div style={{"color":'red'}}>我是一个红的的 div  行内样式</div>


    其他的属性和以前写法是一样的

*/


// 注意单词不要出现拼写错误
class D3demo1 extends React.Component{

    // 构造函数
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象
    constructor(props){
        super(props);
        // 定义数据
        this.state={
            msg:'我是D3demo1组件',
            title:'我是构造函数里面定义的title',
            color:'yellow',
            style:{
                color:'pink',
                fontSize:'20px'
            }
        }

    }

    // 模板
    render(){
        // jsx 语法
        return(
            <div className="D3demo1">
                <h4>{this.state.msg}</h4>

                <div title="1111"><span>方法一：</span>我是一个div 我的title是1111</div>

                <br />

                <div title={this.state.title}><span>方法二：</span>我是一个div 我的title数据 是通过this.state.title动态获取的</div>

                <br />
                <div className="red">我是一个红色的div</div>
                <br />
                <div className={this.state.color}>我是一个黄色的div,我的颜色数据是通过this.state.color获取的</div>
                <br />
                <div style={{"color":'green'}}>我是一个绿色的div,我的颜色数据是通过行内样式获取的</div>
                <br />
                <div style={this.state.style}>我是一个粉色的div,我的颜色数据是通过this.state.color直接写属性值获取的行内样式</div>
                <br />

                <label htmlFor="name">姓名</label>
                <input id="name" />
            </div>
        )
    }
        
    
}

export default D3demo1;