import React, { useState } from "react";
import { firebaseAuth } from "../config";
import { Redirect } from "react-router";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    pwd: "",
    success: false,
  });

  const handleChange = (e, field) => {
    setUser({
      ...user,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    firebaseAuth
      .signInWithEmailAndPassword(user.email, user.pwd)
      .then(function (res) {
        localStorage.setItem("uid", JSON.stringify(res.user.uid));
        setUser({
          email: "",
          pwd: "",
          success: true,
        });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Unable to log in");
        // ...
      });
  };

  return (
    <div className="container">
      {user.success && <Redirect to="/" />}
      <div className="row">
        <div className="col-md-6 offset-md-3 p-5">
          <h1 className="display-4 text-center">Sign - IN </h1>
          <p className="lead text-center">Sign in to post blog</p>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="example:abc@gmail.com"
                value={user.email}
                onChange={(e) => {
                  handleChange(e, "email");
                }}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="***********"
                value={user.pwd}
                onChange={(e) => {
                  handleChange(e, "pwd");
                }}
                required
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-success">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
