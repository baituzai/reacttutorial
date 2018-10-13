import React from 'react';
// import '../assets/css/index.css'

class News extends React.Component{

    constructor(props){
        super(props);  /*用于父子组件传值  固定写法*/

        //定义数据
        this.state={
            userinfo:"令狐冲"
        }
    }

    render(){
        return(
            <div className="News">
                <h4>{this.state.userinfo}</h4>
                <ul>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                    <li>这是一个列表</li>
                </ul>
            </div>
        )
    }
}

export default News;