import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function RegisterUser() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username:"",
        email:"", 
        userPassword:"",
        dob:"",
        gender:""
  });
  const [formError, setFormError] = useState();

  const { username, email, userPassword, dob, gender } = input;

  const notify = (msg) => {
    toast.error(msg);
  };

  const notify1 = (msg) => {
    toast.success(msg);
  };

  const registerUser = async (e) => {
    e.preventDefault();
    // if (Object.keys(input).length < 5) {
    //   notify("Please fill All the Details");
    // }
    try {
      if (
        validate(input) || 
        username == "" ||
        email == "" ||
        userPassword == "" ||
        dob == "" ||
        gender == ""
      ) {
        notify("Please fill All the Details");
      } else {
        const result = await axios.post(
          "http://localhost:3010/blogData",
          input
        );
        notify1("Registered Successfully")
        setTimeout(() => {
          navigate('/login'); 
        }, 3000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const validate = (values) => {
    const error = {};
    let errorFlag = false;
    if (!values.username) {
      error.username = "Name is required";
      notify(error.username);
      errorFlag = true;
    } else {
      error.username = "";
    }

    if (!values.email) {
      error.email = "Email is required";
      notify(error.email);
      errorFlag = true;
    } else {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!values.email.match(pattern)) {
        errorFlag = true;
        error.email = "Please enter valid email";
      } else error.email = "";
    }

    if (!values.userPassword) {
      error.userPassword = "Password is Required";
      errorFlag = true;
      notify(error.userPassword);
    } else {
      const pattern1 =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
      if (!values.userPassword.match(pattern1)) {
        error.userPassword =
          "one lowercase, uppercase, digit, special character, length minimum 4";
        errorFlag = true;
        notify(error.userPassword);
      } else error.userPassword = "";
    }

    if (!values.dob) {
      errorFlag = true;
      error.dob = "Birth Date is required";
      notify(error.dob);
    } else {
      error.dob = "";
    }

    if (!values.gender) {
      error.gender = "Gender is required";
      errorFlag = true;
      notify(error.gender);
    } else {
      error.gender = "";
    }
    setFormError(error);
    return errorFlag;
  };

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setInput((values) => ({ ...values, [name]: value }));
  };
  return (
    <div class="container registerMainDiv">
      <div class="row registerOtherDiv">
        <div class="col-sm registerImageColSm">
          <img
            src="../images/OreoShake.png"
            class="img-fluid registerImageStyle"
            alt="..."
          />
        </div>
        <div class="col-sm registerFormStyle">
          <h3 className="registerH3">Register Here</h3>
          <form onSubmit={(e) => registerUser(e)}>
            <div>
              <input
                type="text"
                class="form-control fc1"
                id="exampleFormControlInput1"
                placeholder="Full Name"
                name="username"
                value={username}
                onChange={(e) => handleRegister(e)}
              />
              <input
                type="text"
                class="form-control fc1"
                id="exampleFormControlInput1"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => handleRegister(e)}
              />
              <input
                type="password"
                class="form-control fc1"
                id="exampleFormControlInput1"
                placeholder="Password"
                name="userPassword"
                value={userPassword}
                onChange={(e) => handleRegister(e)}
              />
              <div class="row dobAndGenderStyle">
                <div class="col dobStyle">
                  <input
                    type="date"
                    class="form-control fc1"
                    name="dob"
                    value={dob}
                    onChange={(e) => handleRegister(e)}
                  />
                </div>
                <div class="col genderStyle">
                  <select
                    id="inputState"
                    name="gender"
                    class="form-control fc1"
                    onChange={(e) => handleRegister(e)}
                  >
                    <option name="gender">--Select Gender--</option>
                    <option name="gender" value="male">
                      Male
                    </option>
                    <option name="gender" value="female">
                      Female
                    </option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                class="btn register-btn"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterUser;
