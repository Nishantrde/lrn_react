import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponenets/Header';
import Footer from './MyComponenets/Footer'; 
import Todos from './MyComponenets/Todos'; 
import AddTodo from './MyComponenets/AddTodo';
import React, {useActionState, useState} from 'react';

import './App.css';

function App() {
  const onDelete = (todo)=>{
    console.log("I am onDelete", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title, desc)=>{
    console.log("your title and desc", title, desc)
    let sno = todos[todos.length-1].sno + 1
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
  }

  let x = 2;
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "job1",
      desc: "the job",
    },
    {
      sno:2,
      title: "job2",
      desc: "the job",
    },
    {
      sno:3,
      title: "job3",
      desc: "the job",
    },
    {
      sno:4,
      title: "job4",
      desc: "the job",
    }
  ])
  return (
    <>
    <Header/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
