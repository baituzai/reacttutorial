import React from 'react';

// 06 React表单详解 约束性和非约束性组件 input text checkbox radio  select  textarea  以及获取表单的内容

/*

约束性和非约束性组件:
      非约束性组:<input type="text" defaultValue="a" />   这个 defaultValue 其实就是原生DOM中的 value 属性。
      
      这样写出的来的组件，其value值就是用户输入的内容，React完全不管理输入的过程。

      约束性组件：<input value={this.state.username} type="text" onChange={this.handleUsername}  /> 

        这里，value属性不再是一个写死的值，他是 this.state.username, this.state.username 是由 this.handleChange 负责管理的。

        这个时候实际上 input 的 value 根本不是用户输入的内容。而是onChange 事件触发之后，由于 this.setState 导致了一次重新渲染。不过React会优化这个渲染过程。看上去有点类似双休数据绑定
*/
class D6demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg:"我是第6节课，demo1，D6demo1.js组件",
            username:'666666'
        };
    }

    /**
     * 注意这个错误的写法 this.setState=({ 这里没有= 等号
     */

    // inputChange=(e)=>{
    //     this.setState=({
    //         username:e.target.value
    //     })
    // }

    inputChange=(e)=>{

        this.setState({
            username:e.target.value
        })
        console.log(e.target.value)

    }

    render() {
        return (
            <div className="D6demo1">

                <h3>React表单详解 约束性和非约束性组件</h3>
                <h4>{this.state.msg}</h4>

                <input value={this.state.username} onChange={this.inputChange}/>

                <br/>
                {this.state.username}

                <br/>
                {/* MV */}

                <input type="text" defaultValue={this.state.username}  />

            </div>
        );
    }
}

export default D6demo1;