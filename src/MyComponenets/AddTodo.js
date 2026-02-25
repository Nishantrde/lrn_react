import React, {useState} from 'react'


export const AddTodo = ({addTodo}) => {

  const [title, setTitle] = useState("") 
  const [desc, setDesc] = useState("")

  const submit = (e)=>{
     e.preventDefault();
     if(!title || !desc){
        alert("title or description can't be blank")
     }
     addTodo(title, desc)
  }

  return (
    <div className='container my-3'>
      <h3>Add a Todo</h3>
    <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
</div>
    )
}

export default AddTodo
