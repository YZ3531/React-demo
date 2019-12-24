/*
    组件的属性操作
*/
import React from 'react'

class Child extends React.Component {
    render () {
        console.log(this.props);
        
        return (
            <div>
                <p>{this.props.uname}</p>
                <p>{this.props.age}</p>
                <p>{this.props.gender}</p>
            </div>
        )
    }
}

class TestAttr extends React.Component {
    state = {
        info: {
            uname: '李四',
            age: '25',
            gender: '男'
        }
    }
    render () {
        let { info } = this.state
        // 单独解构出一个键
        let {gender,...other} = info
        return (
            <div>
                {/* <Child uname='12'></Child> */}
                <Child {...info}></Child>
                <Child {...other}></Child>
            </div>
        )
    }
}
export default TestAttr