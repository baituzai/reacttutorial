import React from 'react';
/*
事件对象  、键盘事件、 表单事件 、ref获取dom节点、React实现类似vue双休数据绑定


事件对象:在触发DOM上的某个事件时,会产生一个事件对象event。这个对象中包含着所有与事件有关的信息


*/

class D5demo1 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            msg:"我是第5节课，demo1，D5demo1.js组件",
            username:''

        }
    }

    run=(event)=>{
        // alert(this.state.msg);

        console.dir(event)
         /*获取执行事件的dom节点   [object HTMLButtonElement]*/
        // alert(event.target)

        event.target.style.background='red';

        //获取dom的属性
        alert(event.target.getAttribute('aid'))

    }

    inputChange=(e)=>{
        console.log('测试成功');
        // 获取表单里面的值
        console.log(e.target.value);
        this.setState({
            username:e.target.value
        })

    }
    getInput=()=>{
        alert(this.state.username);
    }


    render(){
        return(
            <div className="D5demo1">
                <h4>{this.state.msg}</h4>
                <h2>事件对象演示</h2>
                <button aid="123" onClick={this.run}>事件对象</button>

                <br/>
                <h4>表单事件</h4>
                <ul>
                    <li> 1、监听表单的改变事件                        onChange</li>
                    <li>2、在改变的事件里面获取表单输入的值           事件对象</li>
                    <li>3、把表单输入的值赋值给username              this.setState(大括号)</li>
                    <li>4、点击按钮的时候获取 state里面的username     this.state.username</li>
                
                </ul>

                <input onChange={this.inputChange} />
                <button onClick={this.getInput}>获取input的值</button>


            </div>
        )
    }
}

export default D5demo1;