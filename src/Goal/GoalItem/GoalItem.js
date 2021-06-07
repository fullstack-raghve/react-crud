import React from 'react'
import '../Goal.css'
export const GoalItem = props => {
    console.log('parent to child>>>',props.item)

   const removeTour = props =>{
console.log('clicked id is>>>',props)
//.props(data);
//onDel.props(data);
   }

    return (
        <div>
            <h3>I am from goal item list</h3>
            {
                props.item.map((data)=>{
                    return <div className="list-item">
                        <p 
                        key={data.id}>{data.text}
                        <span onClick={removeTour}>Del</span>
                        </p>
                        </div>
                })
            }
        </div>
    )
}
