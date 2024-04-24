import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
          console.log(id);
        //   make sure user is confirmed delete
        fetch(`https://coffee-store-server-beta-swart.vercel.app/user/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted succesfully');
                // remove he user from the ui
                const remainingUser = users.filter(user => user._id !== id);
                setUsers(remainingUser)
            }
        })
    }

    return (
        <div>
            <h2>User: {loadedUsers.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email..</th>
                            <th>Create At</th>
                            <th>Last Logged IN</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        users.map(user => 
                            <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>
                                <button onClick={()=> handleDelete(user._id)} className="btn">X</button>
                            </td>
                        </tr>
                        )
                       }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;