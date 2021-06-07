import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useHistory,useParams } from "react-router-dom";


const ViewUser = () =>{


    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        website: ""
      });

      const { id } = useParams();
///
useEffect(()=>{
    loadUser();
},[])

///load user here 
const loadUser = async() =>{
  const result =   await axios.get("http://localhost:3333/users/"+id);
  console.log('view user',result)
  setUser(result.data)
}
///
  
     return(
          <div className="col-md-6 mx-auto">


  <h2>USER ID - {user.id}</h2>
  <ul class="list-group">
    <li class="list-group-item">{user.name}</li>
    <li class="list-group-item">{user.username}</li>
    <li class="list-group-item">{user.email}</li>
    <li class="list-group-item">{user.phone}</li>
    <li class="list-group-item">{user.website}</li>
    {/* <li class="list-group-item">{user.name}</li>

    <li class="list-group-item">{user.name}</li> */}

  </ul>

        </div>
    )
}
export default ViewUser