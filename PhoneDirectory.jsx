import React from 'react';
import {Component} from 'react';
import './phoneDirectory.css';

class PhoneDirectory extends Component{
  render( ){
    let subscribers=[
      {
      id: '1',
      name: "Kalyan Pate",
      phone: "9999999999"
      }
      ,{
        id: '2',
        name: "kapil Pate",
        phone: '11111111111'
      }
  ];
  
// }
// function PhoneDirectory() {


  return (

  
  <div className='body'>
  
      <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
       


  {
    subscribers.map(sub=>{
      return <div key={sub.id} className="grid-container">
      <span className='grid-item'>{sub.name}</span>
      <span className='grid-item'>{sub.phone}</span>
      <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
      </div>

    })
  }

  </div>
  </div>



  );
  }

}
export default PhoneDirectory;
