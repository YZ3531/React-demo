/*
    表单 : 非受控组件


    本质上就是直接操作dom,类似于vue中的ref
*/ 

import React from 'react'

class TestForm extends React.Component{
    constructor(props){
        super(props)
        // 1 - 创建一个ref实例对象
        this.inputRef = React.createRef()
        this.pwdRef = React.createRef()
        this.fileRef = React.createRef()
    }    
    handleClick=()=>{
        // 点击时获取输入框的value

        // 3 - 获取dom元素
        let input = this.inputRef.current
        let pwd = this.pwdRef.current
        let file = this.fileRef.current
        console.log(input.value);
        console.log(pwd.value);
        // 获取上传文件的信息
        console.log(file.files[0]);
        // 提交到后台接口,进行文件上传
    }
    componentDidMount(){
        // 非受控组件应用场景  : 输入框聚焦,文件上传

        // 实现页面加载时,光标自动定位到用户名输入域
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <h1>非受控组件</h1>
                <hr/>
                用户名 : 
                {/* 2 - 把ref实例对象绑定到对应标签上 */}
                <input type="text" ref={this.inputRef}/>
                密码 : 
                <input type="password" ref={this.pwdRef}/>
                选择文件 : 
                <input type="file" ref={this.fileRef}/>
                <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
}
export default TestForm