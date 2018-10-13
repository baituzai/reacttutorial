import React from 'react';

class D4demo1 extends React.Component{
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象
    constructor(props){
        super(props);
        this.state={
            events:"这次我们讲事件方法",

            message:'我是一个message',

            username:'令狐冲'
        }
         //第二种改变this指向的方法
         this.getMessage=this.getMessage.bind(this);
    }

    run(){
        alert("这是一个run方法")
    }

    getDate(){
        alert(this.state.events);
    }

    getMessage(){
        alert(this.state.message)
    }

     //第三种改变this指向的方法  箭头函数
    getName=()=>{
        alert(this.state.username);
    }
    
    setDate=()=>{
        //改变state的值
        this.setState({
            events:"这次我们讲事件方法,我现在是改变后的数据"
        })
    }

    setName=(str,str1)=>{
        this.setState({
            username:str,
            events:str1
        })
    }
    render(){
        return(
            <div className="D4demo1">
                <h5>{this.state.events}</h5>
                <h5>{this.state.username}</h5>
                <button onClick={this.run}>click事件</button>

                <br/>
                <h6>第1种改变this的指向</h6>
                {/* Uncaught TypeError: Cannot read property 'state' of undefined */}
                {/* 错误写法
                <button onClick={this.getDate}>获取数据</button> */}
                <button onClick={this.getDate.bind(this)}>获取数据</button>


                <br/>
                <h6>第2种改变this的指向</h6>
                <button onClick={this.getMessage}>获取数据</button>


                <br/>
                <h6>第3种改变this的指向</h6>
                <button onClick={this.getName}>获取数据</button>

                <br/>
                <h5>改变state里面的值1</h5>
                <button onClick={this.setDate}>改变state里面的值</button>

                <br/>
                <h5>改变state里面的值2</h5>
                <button onClick={this.setName.bind(this,'任盈盈')}>执行方法传值</button>

                 <button onClick={this.setName.bind(this,'任盈盈','岳灵珊')}>执行方法传值</button>

            </div>
        )
    }
}
export default D4demo1;