// port { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

// import { useEffect,useState } from 'react';

//import './App.css';
//import Button from './components/ui/button/index.jsx';
// // import reactimg from './assets/reactimg.png';
// const App = () => {
//   // const [counter, setCounter] = useState(0);
//   const [data,setData]=useState([]);
//   useEffect(()=>{
//     const fetchData=async()=>{
//       const response =await fetch("https://jsonplaceholder.typicode.com/users");
//       const data= await response.json();
//       setData(data);
//     }
//     fetchData();
//   },[]);
//    console.log(data,"data");
  
//   return (
//     <div >
      /* <h1 style={{ color: 'blue' }}>Hello, Vite + React</h1>
      <img src={reactimg} alt="React Logo" width="200" height="200" />
      <br></br>

      <label htmlFor="inputField">Enter Text:</label>
      <input type="text" id="inputField" name="inputField" />
      <br></br>
      <button style={{ backgroundColor: 'green', color: 'white' }}>Click Me</button>
      <br></br> 
       <Button name="hello all" onclick={() => alert('Button clicked!')} />
      <label>{counter}</label> 
      <button type="button" onClick={() => setCounter((current) => current + 1)}>
        Increment
      </button>
      <label> Counter:{counter}</label>
      <button name={"Increment"} onClick={()=>setCounter(counter+1) } >Increment</button> */
/*       
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <div style={{ border: '1px solid #ccc', padding: '10px 10px', margin: '10px 10px 10px 10px',backgroundColor:'#1c83b4',color:'white', }} key={user.id}>
          
            
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address.city}</p>
            <p><strong>Phone no:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>Company Catch phrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Co-ordinates:</strong>{user.address.geo.lat}    {user.address.geo.lng}</p>
          
          </div>
        ))}
      </ul>
    </div>


 );

}
export default App; */

// import './App.css';
// import {useState} from "react";
// import Title from "./components/ui/button/Title.jsx";
// function App() {
//   const [count, setCount]=useState(0);
//   return(
//     <>
//     <Title count={count} />
//     <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }
// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [form, setForm] = useState({firstName: "",email: "",age: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="container">
//       <div className="form-box">
//         <h2>Registration Form</h2>

//         <label>Name</label>
//         <input
//           type="text"
//           name="firstName"
//           value={form.firstName}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />
//         <br></br>
       

//         <label>Email ID</label>
//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />
//          <br></br>
         
//         <label>Age</label>
//         <input
//           type="number"
//           name="age"
//           value={form.age}
//           onChange={handleChange}
//           placeholder="Enter your age"
//         />
//       </div>
//       <br></br>
      

//       <div className="details-box">
//         <h2>Entered Details</h2>
//         <p>Name: {form.firstName}</p>
//         <p>Email: {form.email}</p>
//         <p>Age: {form.age}</p>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import AddUserForm from "./components/ui/button/AddUserForm.jsx";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  const handleAdd = (newUser) => {
  const updatedUsers = [...users];
  updatedUsers.push(newUser);
  setUsers(updatedUsers);
};

  return (
    <div>
      <h2>Users</h2>

      <AddUserForm onAdd={handleAdd} />

      <h3>{users.length} users</h3>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            backgroundColor: "#1c83b4",
            color: "white",
          }}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address?.city || "Not provided"}</p>
          <p><strong>Phone no:</strong> {user.phone || "Not provided"}</p>
          <p><strong>Website:</strong> {user.website || "Not provided"}</p>
          <p><strong>Company:</strong> {user.company?.name || "Not provided"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
