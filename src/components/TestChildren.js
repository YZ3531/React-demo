/*
    组件的children属性,作用类似于vue中的插槽
*/
import React from 'react'

class Child extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div>
                children内容
                {this.props.children}
                {/* {this.props.children[1]}
                {this.props.children[2]} */}
            </div>
        )
    }
}

class TestChildren extends React.Component {
    state = {
        info: {
            name: 'father',
            age: 12,
            gender: 'man'
        }
    }
    render () {
        return (
            <div>
                <Child>
                    {this.state.info}
                    {/* <div>
                        22
                    </div>
                    <div>
                        66
                    </div> */}
                </Child>
            </div>
        )
    }
}

export default TestChildren
