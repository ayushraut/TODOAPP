import React from 'react'
import { Link} from 'react-router-dom'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './UserReducer'

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

  const handleDelete = (id) =>{
    dispatch(deleteUser({id:id}))


  }
 
  return (
    <div>

        

    <div className='container'>
    <h1 className='text-center pt-5'>To Do Application</h1>
    <Link to="/create" className='btn btn-success my-3'>Create +</Link>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>(
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
              <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
            </td>
          </tr>
        ))}

      </tbody>
    </table>
    </div>

      
    </div>
  )
}

export default Home
