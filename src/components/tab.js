// 封装组件tab
import React from 'react'
import './tab.css'

class MyTab extends React.Component{
    state={
        currentIndex:0
    }
    // handleChange=(index)=>{
    //     this.setState({
    //         currentIndex:index
    //     })
    // }
    handleChange=(e)=>{
        console.log(e.target.dataset.id); // 取到事件对象身上的自定义属性
        console.log(e.target); // 事件源
        console.log(e.currentTarget); // 当前触发事件的节点（委托给谁）
        
        this.setState({
            currentIndex : parseInt(e.target.dataset.id)
            // currentIndex : +e.target.dataset.id
        })
    }
    render(){
        let {currentIndex} = this.state
        let lis=[]
        let divs=[]
        let {data} = this.props
        data && data.forEach((item,index)=>{
        // lis.push(<li onClick={this.handleChange.bind(this,index)} className={index===currentIndex?'active':''} key={index}>{item.ename}</li>)
        lis.push(<li data-id={index} className={index===currentIndex?'active':''} key={index}>{item.ename}</li>)
        divs.push(<div className={index===currentIndex?'active':''} key={index}>{item.cname}</div>)
        })
        return(
            <div className='tab'>
                <ul onClick={this.handleChange}>
                    {lis}
                </ul>
                {divs}
            </div>
        )
    }
}
export default MyTab