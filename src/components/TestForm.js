import React from 'react'
/*
    表单详解 : 受控组件
*/
class TestForm extends React.Component {
    state = {
        name: '',
        job: '',
        introduce: '',
        gender: '2',
        favour: ['1']
    }
    handleSubmit = () => {
        // 一般获取表单最新数据
        console.log(this.state);

    }
    handleItem = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleGender = (e) => {
        // 性别表单的绑定操作
        this.setState({
            gender: e.target.value
        })
    }
    handleFavour = (e) => {
        let { favour } = this.state
        // 爱好数组绑定
        let value = e.target.value

        let flag = favour.some(item => {
            return item === value
        })
        if (flag) {
            // 已存在,从数组中删除即可
            let index = favour.findIndex(item=>{
               return item === value
            })
            if(index!==-1){
                favour.splice(index,1)
            }
        } else {                                                                                                                
            // 未被选中,添加到数组即可
            favour.push(value)
        }
        // 更新状态
        this.setState({
            favour: favour
        })
    }
    render () {
        let { name, job, introduce, gender, favour } = this.state
        return (
            <div>
                <h1>表单详解</h1>
                <hr />

                <h6>input,select,textarea采用处理方式相同（受控组件）</h6>

                用户名 :
                <input type="text" name='name' value={name} onChange={this.handleItem} />
                职业 :
                <select name="job" value={job} onChange={this.handleItem}>
                    <option value="1">web</option>
                    <option value="2">Java</option>
                    <option value="3">Python</option>
                </select>
                自我介绍 :
                <textarea name="introduce" value={introduce} cols="30" rows="10" onChange={this.handleItem}></textarea>

                <hr />

                <h6>注意这些表单控件</h6>
                <div>
                    <label htmlFor="male">男</label>
                    <input checked={gender === '1' ? true : false} value='1' name="gender" type="radio" id="male" onChange={this.handleGender} />
                    <label htmlFor="female">女</label>
                    <input checked={gender === '2' ? true : false} value='2' name="gender" type="radio" id="female" onChange={this.handleGender} />
                </div>
                <div>
                    爱好 :
                    <label htmlFor="sing">唱歌</label>
                    <input checked={favour.includes('1') ? true : false} name='favour' value='1' onChange={this.handleFavour} type="checkbox" id='sing' />
                    <label htmlFor="dance">跳舞</label>
                    <input checked={favour.includes('2') ? true : false} name='favour' value='2' onChange={this.handleFavour} type="checkbox" id='dance' />
                    <label htmlFor="bsb">篮球</label>
                    <input checked={favour.includes('3') ? true : false} name='favour' value='3' onChange={this.handleFavour} type="checkbox" id='bsb' />
                </div>

                <hr />
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        )
    }
}

export default TestForm