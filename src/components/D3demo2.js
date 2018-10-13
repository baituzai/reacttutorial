import React from 'react';

import lhc from '../assets/images/lhc.jpeg'

class D3demo2 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            msg:"新闻",
            list:[111,222,333],
            list2:[
                <h5 key="1">我是h5标签</h5>,
                <h5 key="2">我是h5标签</h5>
            ],
            list3:[
                {title:"新闻111"},
                {title:"新闻222"},
                {title:"新闻333"}
            ]
        }
    }

    render(){

        let listResult=this.state.list.map(function(value,key){
            return<li key={key}>{value}</li>
        })
        return(
            <div className="D3demo2">
                {this.state.msg}
                <div>
                <h5>第一种方式直接放入图片连接</h5>
                <img alt="令狐冲" src="http://cms-bucket.nosdn.127.net/b59141356dc64bc7aef314129a10c7c120180326155150.jpeg"/>
                </div>
                
                <div>
                <h5>第二种方式 引入本地路径图片require方式</h5>
                <img alt="令狐冲" src={require("../assets/images/lhc.jpeg")} />
                </div>
                <div>
                <h5>第三种方式 引入本地路径图片import方式</h5>
                <img alt="令狐冲" src={lhc} />
                </div>

                <hr/>
                <ul>
                    {this.state.list}
                </ul>

                <hr/>
                <ul>
                    {listResult}
                </ul>
                
                <hr/>
                <ul>
                    {this.state.list2}
                </ul>

                <hr/>
                <ul>
                    {
                        this.state.list3.map(function(value,key){
                            return(
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }
                    
                </ul>
        
                
                
            </div>
        )
    }
}

export default D3demo2;