import React from 'react';
import './App.css';
// import Test from './components/test'
// import MyTab from './components/tab'
// import Person from './components/child'
// import Form from './components/form'
// import MyBook from './components/Mybook'
// import TestForm from './components/TestForm'
// import TestForm from './components/TestForm1'
// import TestForm from './components/TestDotNotion'
// import TestForm from './components/TestAttr'
import TestForm from './components/TestChildren'

// let listData = [{
//   ename: 'apple',
//   cname: '苹果'
// }, {
//   ename: 'orange',
//   cname: '橘子'
// }, {
//   ename: 'lemon',
//   cname: '柠檬'
// }]

function App() {

  return (
    <div className="App">
      {/* hello world! */}
      {/* <Test></Test> */}
      {/* <MyTab data={listData}></MyTab> */}
      {/* <Person></Person> */}
      {/* <Form></Form> */}
      {/* <MyBook></MyBook> */}
      <TestForm></TestForm>
    </div>
  );
}

export default App;
