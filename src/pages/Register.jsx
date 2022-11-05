import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Logo from "../assets/logo.png";
import "./register.css";
import { registerRoute } from "../utils/APIroutes";

function Register() {
  const navigate = useNavigate();
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EML_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { username, email, password, confirmPassword } = values;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(values);
    if (handleValidation()) {
      await axios
        .post(registerRoute, {
          username,
          email,
          password,
        })
        .then((response) => {
          if (response.data.status === true) {
            localStorage.setItem(
              "chat-app-user",
              JSON.stringify(response.data.user)
            );
          }
          navigate("/");
        })
        .catch((error) => {
          if (error.response.status === 419) {
            toast(error.response.data.message, toastOptions);
          }

          if (error.response.status === 420) {
            toast(error.response.data.message, toastOptions);
          }

          if (error.response.status === 421) {
            toast(error.response.data.message, toastOptions);
          }

          if (error.response.status === 422) {
            toast(error.response.data.message, toastOptions);
          }

          if (error.response.status === 423) {
            toast(error.response.data.message, toastOptions);
          }
        });
      // navigate("/");
    }
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleValidation = () => {
    // const { username, email, password, confirmPassword } = values;

    if (USER_REGEX.test(username) === false) {
      toast(
        "4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.",
        toastOptions
      );
      return false;
    } else if (EML_REGEX.test(email) === false) {
      toast("Please enter a valid Email", toastOptions);
      return false;
    } else if (PWD_REGEX.test(password) === false) {
      toast(
        "Password should be 8 to 24 characters and include uppercase and lowercase letters, a number and a special character with @$#%",
        toastOptions
      );
      return false;
    } else if (password !== confirmPassword) {
      toast("Please enter the same password", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="register-container">
        <form
          action=""
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="brand">
            <img src={Logo} alt="Logo" />
            <h1>WeTalk</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(event) => handleChange(event)}
            ref={focusRef}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit" onClick={handleValidation}>
            Create User
          </button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
