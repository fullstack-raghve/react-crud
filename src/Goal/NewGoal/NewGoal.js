//import { Button } from 'bootstrap'
import { event } from 'jquery'
import React, {useState} from 'react'

export const NewGoal = props => {
    const [inputVal, setInputVal] = useState('')

const addGoalHandler = event => {

event.preventDefault();

    const newGoalItem =  {
            id:Math.random().toString(),
           // text:'Learning React in 2021'
            text:inputVal
        }


       

        props.onAdding(newGoalItem);

};

const changeHandle = event =>{
    //inputVal = event.target.value;
    setInputVal(event.target.value);
    //inputVal = '';
}
    return (
       
          <form onSubmit = {addGoalHandler}>
            <div className="from-group" >
            <input type='text'  onChange={changeHandle}  className="form-control" placeholder="Add Goal"/>
            <button className="btn btn-success" type="submit">Add</button>
            </div>  
         </form>  
      
    )
}


