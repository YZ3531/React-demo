import React from 'react'

/*
    子传父案例
*/

class Person extends React.Component {
    state = {
        total: 0
    }
    // 定义一个更改父组件状态的方法,并绑定给子组件的一个自定义属性
    // 接收子组件传递进来的值,改变自身状态,完成子传父
    handleTotal = (n) => {
        this.setState({
            total: this.state.total + n
        })
    }
    render () {
        return (
            <div>
                <p>总数 : {this.state.total}</p>
                <hr />
                <Child more={this.handleTotal} cname='tom' />
                <Child more={this.handleTotal} cname='hony' />
            </div>
        )
    }
}

class Child extends React.Component {
    state = {
        num: 0
    }
    addNum = () => {
        this.setState({
            num: this.state.num + 1
        })
        // 子组件调用更改父组件状态的方法
        // 并传入实参,实现子组件传值给父组件
        this.props.more(2)

    }
    render () {
        return (
            <div>
                <div>
                    <h1>
                        {this.props.cname}的数量是 : {this.state.num}
                        <button onClick={this.addNum}>点击</button>
                    </h1>
                </div>
            </div>
        )
    }
}
export default Person