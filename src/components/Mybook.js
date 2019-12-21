import React from 'react'
import './MyBook.css'

/*
    图书管理案例
*/


class MyBook extends React.Component {
    state = {
        books: [],
        id:'',
        bname:''
    }
    // 挂载阶段
    componentDidMount () {
        // 调用接口,获取数据
        setTimeout(() => { // 模拟调用接口
            let data = [
                {
                    id: 1,
                    bname: '浪潮之巅'
                },
                {
                    id: 2,
                    bname: '智能时代'
                },
                {
                    id: 3,
                    bname: '三国演义'
                }
            ]
            this.setState({
                books: data
            })
        }, 1000)
    }
    // 阻止默认行为
    handleJump = (e) => {
        e.preventDefault()
    }
    // 输入框值发生改变触发
    handleAdd=(e)=>{
        this.setState({
            // ES6新规则,对象的属性名可以是动态的
            [e.target.dataset.name]:e.target.value
        })
        // setTimeout(()=>{
        //     console.log(this.state);
        // })
    }
    // 提交
    handleSubmit=()=>{
        // 添加操作 : 
        //  -1 : 获取表单数据
        //  -2 : 将数据添加到数组中
        //  -3 : 更新数据
        //  -4 : 清空数组
        let {books,id,bname} = this.state

        // 非空验证
        if(!id||!bname) return alert('内容不可为空') 

        // 重复验证
        let flag=books.some(item=>{
            return item.id === +id
        })
        if(flag)return alert('编号重复')
        
        let book ={id,bname}
        // 不要直接修改state中的数据,推荐先复制一份,修改之后整体覆盖
        let newBooks = [...books]
        newBooks.push(book)
        this.setState({
            books:newBooks,
            id:'',
            bname:''
        })
        // books.push({
        //     id:this.state.id,
        //     bname:this.state.bname
        // })
        // this.setState({
        //     books:books
        // })
    }
    // 删除
    handleDelete=(id)=>{
        if(window.confirm('确定要删除吗')){
            console.log(id);
            let newBooks=[...this.state.books]
            let index =newBooks.findIndex(item=>{
                return item.id === id
            })
            if(index!==-1){
                newBooks.splice(index,1)
            }
            this.setState({
                books:newBooks
            })

        }
        
    }
    render () {
        let { books,id,bname } = this.state
        let bookList = books.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.bname}</td>
                    <td>
                        <a href="https://baidu.com">编辑</a>
                        <span>|</span>
                        <a onClick={this.handleDelete.bind(this,item.id)} href="https://baidu.com">删除</a>
                    </td>
                </tr>
            )
        })
        return (
            <div className='book'>
                {/* 标题 */}
                <div className="title">图书管理系统</div>
                {/* 表单 */}
                <div className="form">
                    图书编号
                    <input type="text" data-name="id" value={id} onChange={this.handleAdd} />
                    图书名称
                    <input type="text" data-name="bname"   value={bname} onChange={this.handleAdd} />
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
                {/* 表格 */}
                <table>
                    {/* 表头 */}
                    <thead>
                        <tr>
                            <th>图书编号</th>
                            <th>图书名称</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    {/* 表体 */}
                    <tbody onClick={this.handleJump}>
                        {/* <tr>
                            <td>1</td>
                            <td>book</td>
                            <td>
                                <a href="https://baidu.com">编辑</a>
                                <span>|</span>
                                <a href="https://baidu.com">删除</a>
                            </td>
                        </tr> */}
                        {books.length===0 && <tr><td colSpan="3">正在加载...</td></tr>}
                        {bookList}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default MyBook