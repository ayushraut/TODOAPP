import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'



const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const users = useSelector((state)=>state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch(addUser({id:users[users.length -1].id + 1,name,email}))
        navigate('/')

    }


  return (
    

    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="w-50 border bg-secondary text-white p-5">
            <h3>Add New User</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" class="form-control" placeholder="Enter Name" onChange={e => setName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" class="form-control" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <br/>
                <button type="submit" class="btn btn-info">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create
