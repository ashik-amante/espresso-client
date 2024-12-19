
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    
    const loadedUsers = useLoaderData()
    const [users,setUsers] = useState(loadedUsers)

    const handleDelete = id=>{
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = users.filter(luser=> luser._id !== id)
            setUsers(remaining)
        })
    }
    return (
        <div>
            <h1>All users : {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        users.map((user ,index)=>  <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td></td>
                            <td>
                                <button onClick={()=> handleDelete(user._id)} className='btn'>X</button>
                            </td>
                        </tr>)
                      }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;