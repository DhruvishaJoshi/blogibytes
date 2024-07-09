import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  
  const navigate = useNavigate();

  const [input, setInput] = useState({});
  const [login, setLogin] = useState(false);
  const [formError, setFormError] = useState({});
  const [loading,setLoading] = useState(false)
  const { email, pass } = input;

  const notify = (msg) => {
    toast.error(msg);
  };
  const notify1 = (msg) => {
    toast.success(msg);
  };

  const validate = (values) => {
    const error = {};
    if (!values.email) {
      error.email = "Email is required";
      notify(error.email);
    } else {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!values.email.match(pattern)) {
        error.email = "Please enter valid email";
      } else error.email = "";
    }
    if (!values.pass) {
      error.pass = "Password is Required";
      notify(error.pass);
    } else {
      const pattern1 =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
      if (!values.pass.match(pattern1)) {
        error.pass =
          "one lowercase, uppercase, digit, special character, length minimum 4";
        notify(error.pass);
      } else error.pass = "";
    }
    return error;
  };
  const handleLogin = (e) => {
    setLoading(true)
    e.preventDefault();
    
    setFormError(validate(input));
    if (Object.keys(input).length < 2) {
      const msg = "Please fill all the details"
      notify(msg)
    }
   
    try{
      axios.get("http://localhost:3010/blogData").then((result) => {
        const user = result.data.find(
          (user) => (user.email === input.email && user.userPassword === input.pass )
        );
        if(user)
        {
          notify1("Login Successfull")
          setLoading(false)
          setTimeout(() => {
            navigate("/add-data")
          }, 3000);
        }
        if(!user)
          {
            setLoading(false)
            notify("Login Unsuccessfull")
          }
         
      });
    }
    catch(e)
    {
      console.log(e)
    }
   
    // setInput(input);
    // console.log(input.data);
  };
  
  const handleLoginData = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  return (
    <div>
      <div class="container registerMainDiv">
        <div class="row registerOtherDiv">
          <div class="col-sm loginImageColSm">
            <img
              src="../images/OreoShake.png"
              class="img-fluid loginImageStyle"
              alt="..."
            />
          </div>
          <div class="col-sm loginFormStyle">
            <h3 className="registerH3">Log In</h3>
            <form onSubmit={(e) => handleLogin(e)}>
              <div>
                <input
                  type="text"
                  class="form-control fc1"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => handleLoginData(e)}
                />
                <input
                  type="password"
                  class="form-control fc1"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                  name="pass"
                  value={pass}
                  onChange={(e) => handleLoginData(e)}
                />

                <button type="submit" class="btn login-btn" disabled={loading || Object.values(input).includes("") }>
                  Login
                </button>
              </div>
            </form>

            <Link to="/register" className="loginLinkStyle">
              Register
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
