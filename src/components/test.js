import React from 'react'

class demo extends React.Component{
    constructor(props){
        super(props)   
        // bind作用就是改变函数内部的this指向
        this.add = this.add.bind(this)
    }
    // 状态
    state={
        name:1
    }
    // 事件
    add(e){
        // 无法直接查看事件对象参数
        console.log(e);
        
        // 修改状态
        this.setState({
            name:this.state.name+1 
        })
    }

    change=(id,e)=>{
        // id为传递来的参数，采取bind方式传递参数
        console.log(id);
        // e为事件对象
        console.log(e.target.innerHTML);
        
    }
    // change=(e)=>{
    //     // 获取元素自定义属性
    //     console.log(e.target.dataset)

    // }
    
    render(){
        return(
            <div>
                <p>{this.state.name}</p>
                <button onClick={this.add}>点击</button>
                <ul>
                    <li onClick={this.change.bind(this,1)}>三国演义</li>
                    <li onClick={this.change.bind(this,2)}>水浒传</li>
                    <li onClick={this.change} data-id='3'>西游记</li>
                    <li onClick={(e)=>{this.change(4,e)}}>红楼梦</li>
                </ul>
            </div>
        )
    }
}

export default demo