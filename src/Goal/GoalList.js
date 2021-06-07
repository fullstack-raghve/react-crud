import React,{useState} from 'react'
import './Goal.css';
import { GoalItem } from './GoalItem/GoalItem';
import { NewGoal } from './NewGoal/NewGoal';

export const GoalList = () => {
///this is a parent component
const [myGoals, setMyGoals] = useState([
        {
            id:1,text:'Learning React in 2021'
        },
        {
            id:2,text:'Learning MEAN in 2021'
        },
        {
            id:3,text:'Learning MERN in 2021'
        }
        
]);
///static data

///

const addNewGoalHandler = newGoal => {
    myGoals.concat(newGoal)
//console.log('newGoal>>>',newGoal);

//setMyGoals(myGoals.concat(newGoal));
setMyGoals(oldGoal=>oldGoal.concat(newGoal));
//console.log('newGoal>>>',myGoals);

}

const delItem = () =>{
    
}


    return (
        <div>
            <p>I am from goal - Parent component</p>
            <NewGoal onAdding = {addNewGoalHandler} onDel = {delItem} />
            <GoalItem item = {myGoals} />
                
        </div>
    )
}
