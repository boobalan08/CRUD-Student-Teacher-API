import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(null);
  const handleChange = (event) => {
    setInput(event.target.value)
    console.log(input);
  };
  const handleClick = () => {
    if(input===null){
alert("Please Enter Value")
    }else{navigate("/home");}
    
  };

  return (
    <div>
      <div className="container my-2">
        <div className="heading mt-3">
          <h1 className="text-center p-2">Welcome Back</h1>
        </div>
        <div className="row my-3 cardss">
          <div className="col">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
              alt="Login"
              className="img-width"
            />
          </div>
          <div className="col d-flex login-id">
            <form className="form form-group  login-id">
              <div className="form-group m-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group m-3">
                <label htmlFor="pass">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="pass"
                  placeholder="Enter password"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="from-group m-3 d-flex justify-content-center">
                <button
                  className="btn btn-primary text-center col-8"
                  onClick={handleClick}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
