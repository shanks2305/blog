import React, { useState, useEffect } from "react";
import Header from "./asset/Header";
import Card from "./asset/Card";
import { db } from "../config";

const Home = ({ loggedIn }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("articles")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          setData([...data, doc.data()]);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="mb-5">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {data.map((d, i) => (
              <Card
                key={i}
                cardTitle={d.title}
                blogDesc={d.desc}
                imgSrc={d.imageUri}
              />
            ))}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
