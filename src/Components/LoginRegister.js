import "./LoginRegistor.css";
import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import { Validation } from "./Validation";
// import { Routes, Route, Link } from "react-router-dom";
import News from "./News";
import AuthContext from "../Context/AuthProvider";
import axios from "../api/axios";

const LoginURL = "http://fantasyleague-pl7o.onrender.com/user/newUser";

const initialValues = {
  Email: "",
  lEmail: "",
  Password: "",
  Name: "",
  cPassword: "",
  lPassword: "",
};
// const handleLoginSubmit = (values, action) => {
//     console.log(values);
//     action.resetForm();
// };

const LoginRegister = () => {
  const { setAuth } = useContext(AuthContext);

  const handleRSubmit=async(e)=>{
      e.preventDefault();
    try{
      const response=await axios.post(LoginURL,
        JSON.stringify({email:rUser,password:rPwd}),{
          headers:{'Content-Type':'application/json'},
          withCredentials:true
        }
        );
        setSuccess(true);
    }catch(err){
      if(!err?.response){
        console.log('No Server Response')
      }
    }
  }

  const handleLSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LoginURL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if(!err){
        console.log('No server Response');
      } else if(err.response?.status==400){
        console.log('Missing Username or password');
      }else if(err.response?.status==401){
        console.log('Unauthorized');
      }else{
        console.log('Login Failed');
      }
    }
  };

  // const[errMsg,setErrMsg]=useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState("");
  const [rUser, rSetUser] = useState("");
  const [rPwd, rSetPwd] = useState("");
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: Validation,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  console.log(values);

  const [addclass, setaddclass] = useState("");

  const [success, setSuccess] = useState(false);

  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <>
          {success ? (
            // <section>
            //   <h1>you are logged in</h1>
            // </section>
            <News />
          ) : (
            <form onSubmit={handleRSubmit}>
              <h1>Create Account</h1>
              <div className="pad">
                <input
                  type="text"
                  id="name"
                  placeholder="NAME"
                  name="Name"
                  value={values.Name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.Name && touched.Name ? (
                  <p className="form-error">{errors.Name}</p>
                ) : null}
              </div>
              <div className="pad">
                <input
                  type="email"
                  id="Email"
                  placeholder="EMAIL"
                  name="Email"
                  value={values.rUser}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.Email && touched.Email ? (
                  <p className="form-error">{errors.Email}</p>
                ) : null}
              </div>
              <div className="pad">
                <input
                  type="password"
                  id="Password"
                  placeholder="PASSWORD"
                  name="Password"
                  value={values.rPwd}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.Password && touched.Password ? (
                  <p className="form-error">{errors.Password}</p>
                ) : null}
              </div>
              <div className="pad">
                <input
                  type="password"
                  id="CPassword"
                  placeholder="CONFIRM PASSWORD"
                  name="cPassword"
                  value={values.cPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {errors.cPassword && touched.cPassword ? (
                <p className="form-error">{errors.cPassword}</p>
              ) : null}
              <button type="submit">REGISTER</button>
            </form>
          )}
        </>
      </div>
      {/* Login */}

      <div className="form-container sign-in-container">
        <>
          {success ? (
            <News />
          ) : (
            <form onSubmit={handleLSubmit}>
              <div className="pad">
                <h1>Login</h1>
                <input
                  type="email"
                  placeholder="EMAIL"
                  id="username"
                  name="lEmail"
                  autoComplete="off"
                  // value={values.lEmail}
                  value={values.user}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.lEmail && touched.lEmail ? (
                  <p className="form-error">{errors.lEmail}</p>
                ) : null}
              </div>
              <div className="pad">
                <input
                  type="password"
                  placeholder="PASSWORD"
                  name="lPassword"
                  // value={values.lPassword}
                  value={values.pwd}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.lPassword && touched.lPassword ? (
                  <p className="form-error">{errors.lPassword}</p>
                ) : null}
              </div>
              <button type="submit">LOGIN</button>
            </form>
          )}
        </>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
