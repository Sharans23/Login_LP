import "./LoginRegistor.css";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Validation } from "./Validation";

const initialValues = {
  Email: "",
  Password: "",
  Name: "",
  cPassword: "",
};

const LoginRegister = () => {
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Validation,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(values);
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="pad">
          <input
            type="text"
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
            placeholder="EMAIL"
            name="Email"
            value={values.Email}
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
            placeholder="PASSWORD"
            name="Password"
            value={values.Password}
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
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <div className="pad">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="EMAIL"
            name="Email"
            value={values.Email}
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
              placeholder="PASSWORD"
              name="Password"
              value={values.Password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.Password && touched.Password ? (
              <p className="form-error">{errors.Password}</p>
            ) : null}
          </div>
          <button type="submit">LOGIN</button>
        </form>
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
