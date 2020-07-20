import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = ({ loggedIn, logoutUser }) => {
  return (
    <footer className="bg-dark fixed-bottom mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-white text-center">
              Copyright @Shishir Bahuguna
            </h3>
          </div>
          <div className="col-md-6">
            <h5 className="text-center text-white m-1">Quick Links</h5>
            <ul>
              {loggedIn ? (
                <Fragment>
                  <li>
                    <Link to="/blog">Home</Link>
                  </li>
                  <li>
                    <Link to="/user/addArticle">Add a Article</Link>
                  </li>
                  <li>
                    <button className="btn btn-warning" onClick={logoutUser}>
                      logout
                    </button>
                  </li>
                </Fragment>
              ) : (
                <li>
                  <Link to="/user/signin">Signin</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
