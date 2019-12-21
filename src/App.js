import React from 'react';
import './App.css';
// import Test from './components/test'
// import MyTab from './components/tab'
// import Person from './components/child'
// import Form from './components/form'
import MyBook from './components/Mybook'

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
      <MyBook></MyBook>
    </div>
  );
}

export default App;
