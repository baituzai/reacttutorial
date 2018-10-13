import React from 'react';

class  D5demo3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是第5节课，demo3，D5demo3.js组件",
            username:'666'
        };
    }

    inputChange=(e)=>{

        this.setState({
            username:e.target.value
        })
        console.log(e.target.value)

    }
    setUsername=(e)=>{
        this.setState({
            username:'令狐冲'
        })
    }
    render() {
        return (
            <div className="D5demo3">
                <h4>{this.state.msg}</h4>
                <h2>双向数据绑定:model改变影响View    view改变反过来影响model </h2>

                <input value={this.state.username} onChange={this.inputChange}/>
                
                <p>{this.state.username}</p>
                <button onClick={this.setUsername}>点击改变username的值</button>
            </div>
        );
    }
}

export default D5demo3;