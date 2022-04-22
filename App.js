import React from 'react';
import Header from './Header';
import PhoneDirectory from './PhoneDirectory';


function App() {
  return (
<fragment>
  <Header />
 <PhoneDirectory />
</fragment>

  )
}

export default App;



/*
  const [employees, setEmployees] = useState([]);
   return (
   <div className="App"> 
  <AddEmpolyee employees={employees} setEmployees={setEmployees} />
  <EmployeeList employees={employees}/>
</div>
  );
*/




/*
<div className="App"> 
  <AddEmpolyee employees={employees} setEmployees={setEmployees} />
  <EmployeeList employees={employees}/>
</div>







useState

 const [myname, setMyName] =useState("Kalyanj PAte")
 console.log("state", myname);
 console.log("re-render");
   return (
    <div className="App"> 
    <FirstComponent name={myname}/>
    <FirstComponent name="kapil"/>
    <FirstComponent name="sachin"/>

    <button onClick={()=> setMyName(Math.random)}>Change State</button>
    
</div>


useEffect ==>



import FirstComponent from "./FirstComponent";
import {useState, useEffect} from "react";

function App() {
  const [name, setMyName]= useState ("Kalyan");
  const [email, setEmail]= useState ("Kalyan@gamil.com");



  useEffect(()=> {
    console.log("re-render");
  }, []);
 useEffect(()=>{
   console.log("run", name);
 }, [name]);
   return (
    <div className="App"> 
   <form>
     <input type="text" placeholder="enter name" value={name} onChange={(e)=>setMyName(e.target.value)}/>
   <input type="email" placeholder="enter email" value={email}/>
   
   </form>
</div>
  );
}

export default App;

*/