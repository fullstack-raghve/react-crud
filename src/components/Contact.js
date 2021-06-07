import React,{useState} from 'react';

const Contact = () =>{
  
     return(
          <div className="col-md-6 mx-auto">

        
          <form>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Enter email" id="email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
          </div>
         
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
export default Contact