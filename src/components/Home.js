import React, {Component} from 'react';

class Home extends Component{

    // 构造函数
    constructor(){
        super();

        // react 定义数据 
        this.state={
            name:"令狐冲",
            age:"25",
            girlfriend:{
                name:"任盈盈",
                age:"24",
                home:"mojiao"

            }
        }
    }
    // 方法之间不用写逗号
    render(){

        // React创建组件、 ReactJSX语法、 
        // React绑定数据 React绑定对象
        return(
            <div>
                <h4>react里面的所有节点都要被根节点包含</h4>
                <p>姓名：{this.state.name}</p>
                <p>年龄：{this.state.age}</p>
                <p>对象名字：{this.state.girlfriend.name}</p>
                <p>对象年龄：{this.state.girlfriend.age}</p>
            </div>
        )
    }
}

export default Home;