import React from 'react'

// 受控组件--类似于双向绑定

class TestForm extends React.Component{
    state={
        name:'123'
    }
    // 默认值发生改变执行事件
    change=(e)=>{
        // 通过事件对象可以获取到最新的值
        console.log(e.target.value);
        // 实现双向绑定,当值改变时,更新状态数据
        this.setState({
            name:e.target.value
        })
        
    }
    // 提交表单中的值
    submit=()=>{
        console.log(this.state.name);
        // 取到值后就是调用接口向后端发送请求,进行数据交互
    }
    render(){
        return(
            <div>
                <h1>表单案例</h1>
                用户名 ： 
                <input type="text" value={this.state.name} onChange={this.change}/>
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}
export default TestForm