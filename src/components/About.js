import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../tours/Loading';
import Tours from '../tours/Tours';
const url = 'https://course-api.com/react-tours-project'

const About = () =>{
    const [loading, setLoading] = useState(true);

const [tours, setTours] = useState([]);

    useEffect(()=>{
        loadTours();
        //setLoading(false);
    },[])
    
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
      }

    const loadTours = async () =>{

    //     const url = 'https://course-api.com/react-tours-project'
      const toursList =  await axios.get(url);
      console.log('toursList',toursList.data);
      setTours(toursList.data);
      setLoading(false);

    // setLoading(true)
    // try {
    //   const response = await fetch(url)
    //   const tours = await response.json()
    //   setLoading(false)
    //   setTours(tours)
    // } catch (error) {
    //   setLoading(false)
    //   console.log(error)
    // }
   

    }

    if(loading){
        return(
            <Loading/>

        )
    }
    if (tours.length === 0) {
        return (
          <main>
            <div className='title'>
              <h2>no tours left</h2>
              <button className='btn' onClick={() => loadTours()}>
                refresh
              </button>
            </div>
          </main>
        )
      }
  

    return(
          <main>
      <Tours tours={tours} removeTour = {removeTour}/>
    </main>
 //removeTour={removeTour}
    //     <div>
    //          <div class="card" style="width:400px">
    // <div class="card-body">
    //   <h4 class="card-title">John Doe</h4>
    //   <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
    //   <a href="#" class="btn btn-primary">See Profile</a>
    // </div>

    //      </div>
    //      </div>
         
    )
}
export default About