import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () =>{
 const [users, setUser] = useState([]);

useEffect(()=>{
console.log('heloo from reaxct');
loadUsers();
},[]);

const loadUsers = async() =>{
const result = await axios.get('http://localhost:3333/users');
setUser(result.data.reverse());
console.log('users>>',result);
console.log('users data>>',result.data);

}
///del user 
const deleteuser = async id =>{
  await axios.delete(`http://localhost:3333/users/${id}`);
  loadUsers();
}
///
     return(
        <div>
           <div class="container">
  <h2>Users list</h2>
  <table class="table table-dark">
    <thead>
      <tr>
        <th>Name</th>
        <th>User name</th>
        <th>Email</th>
        <th>Action</th>

      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=>(
                <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <Link className = "btn btn-success mr-2" to={`/users/view/${user.id}`}>View</Link>
                    <Link className = "btn btn-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link className = "btn btn-danger mr-2" onClick = {()=> deleteuser(user.id)}>Delete</Link>

                </td>
                </tr>
            ))
        }



      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
        <td>edit ,del</td>

      </tr> */}
      
    </tbody>
  </table>
</div>

         </div>
    )
}
export default Home