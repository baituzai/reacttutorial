import React from 'react';
class D6demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg:"我是第6节课，demo2，D6demo2.js组件",
            name:'',  
            sex:'1',     
            city:'',      
            citys:[ 
                
                '选择城市','北京','上海','深圳'            
            ],
            hobby:[   
                {  
                    'title':"睡觉",
                    'checked':true
                },
                {  
                    'title':"吃饭",
                    'checked':false
                },
                {  
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info:'' 
        };
    }

    handleSubmit=(e)=>{
        // form表单 阻止submit的提交事件（点击自动刷新）
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info)
    }

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }

    handleCity=(e)=>{
        
        this.setState({
           city:e.target.value
        })
    }

    handleHobby=(key)=>{
        var hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }

    handleInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
            <div className="D6demo2">
                <h3>React表单</h3>
                <h4>{this.state.msg}</h4>
            
                <form onSubmit={this.handleSubmit}>
                    用户名：<input type="text" value={this.state.name} onChange={this.handleName}/>
                    <br/>


                    性别：<input type="radio" value="1" checked={this.state.sex==1} onChange={this.handleSex}/>男
                    <br/>
                    <input type="radio" value="2" checked={this.state.sex==2} onChange={this.handleSex}/>女
                    <br/>


                    居住城市：
                    <select value={this.state.city} onChange={this.handleCity}>
                        {
                            this.state.citys.map(function(value,key){
                                return <option key={key}>{value}</option>
                            })
                        }
                        
                    </select>

                    <br/>
                    爱好：
                    {

                        // 注意this的指向
                        this.state.hobby.map((value,key)=>{
                            return(
                                <span key={key}>
                                <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,key)}/>{value.title}
                                </span>
                            )
                        })
                    }
                    <br/>
                    备注：
                    <textarea value={this.state.info} onChange={this.handleInfo}/>
                    <br/>
                    <button type="submit">提交</button>
                </form>

            
            </div>
        );
    }
}

export default D6demo2;