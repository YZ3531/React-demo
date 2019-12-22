/*
    组件化进阶 : 点标记用法
*/

/*
    函数表达式
        let xx = function(){} - 表达式
        function xx(){} - 声明式
    类表达式
        let xx = class{} - 表达式
        class xx(){} - 声明式

    点标记
        在普通对象中定义类组件
            类表达式的方式定义的类组件
*/

import React from 'react'

let TestCom = {
    Header: class extends React.Component {
      render () {
        return (
          <div>Header</div>
        )
      }
    },
    Section: class extends React.Component {
      render () {
        return (
          <div>Section</div>
        )
      }
    },
    Footer: class extends React.Component {
      render () {
        return (
          <div>Footer</div>
        )
      }
    }
  }
  
  class TestDotNotion extends React.Component {
    render () {
      return (
        <div>
          <TestCom.Header></TestCom.Header>
          <TestCom.Section></TestCom.Section>
          <TestCom.Footer></TestCom.Footer>
        </div>
      )
    }
  }
  
  export default TestDotNotion

/**********************************************************************************/
 /*
    类表达式
    class Person () {}
    let Person = class {}

    函数表达式
    function foo () {}
    let foo = function () {}
  */

  // 类表达式
  let Person = class {
    constructor(uname, age) {
      this.uname = uname;
      this.age = age;
    }
  }

  let p = new Person('lisi', 12)
  console.log(p)

  // 类表达式的继承
  let Student = class extends Person {
    constructor(uname, age, score) {
      super(uname, age);
      this.score = score;
    }
  }
  let stu = new Student('zhangsan', 13, 100)
  console.log(stu)


  let MyReact = {
    Student: class extends Person {
      constructor(uname, age, score) {
        super(uname, age);
        this.score = score;
      }
    },
    Teacher: class extends Person {}
  }

  let stu1 = new MyReact.Student('wangwu', '14', 150)
  console.log(stu1)

