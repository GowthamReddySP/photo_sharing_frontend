import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      // handle login logic
      const logindata=await fetch("https://nightgown-elk.cyclic.app/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:email,
          password:password
        }),
      })
      const data=await logindata.json();
      if(logindata.status===200){
        navigate('/home');
      }
      console.log(data);
      console.log("email:", email);
      console.log("password:", password);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
}

export default Login;
