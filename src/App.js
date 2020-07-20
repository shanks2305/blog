import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Footer from "./components/asset/Footer";
import AddArticle from "./components/AddArticle";

const App = () => {
  const [state, setState] = useState({
    loggedIn: false,
  });

  useEffect(() => {
    if (localStorage.getItem("uid")) {
      setState({
        ...state,
        loggedIn: true,
        uid: JSON.parse(localStorage.getItem("uid")),
      });
    }
  }, []);

  const logoutUser = () => {
    if (localStorage.getItem("uid")) {
      localStorage.removeItem("uid");
    }
    setState({
      loggedIn: false,
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/blog" exact>
          <Home loggedIn={state.loggedIn} />
        </Route>
        <Route path="/user/signin" exact component={Signin} />
        <Route path="/user/signup" exact component={Signup} />
        <Route path="/user/addArticle" exact component={AddArticle} />
      </Switch>
      <Footer loggedIn={state.loggedIn} logoutUser={logoutUser} />
    </Router>
  );
};

export default App;
