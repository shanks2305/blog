import React, { useState, useEffect } from "react";
import { storage, db } from "../config";
import { v4 as uuidv4 } from "uuid";
import { Redirect } from "react-router-dom";

const AddArticle = () => {
  const [imageAsFile, setImageAsFile] = useState("");
  const [formData, setFromData] = useState({
    title: "",
    desc: "",
    imageUri: "",
  });

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (formData.imageUri !== "") {
      db.collection("articles")
        .add(formData)
        .then((res) => {
          console.log(res);
          alert("Article Uploaded");
          setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
          alert("failed to upload article");
        });
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const random = uuidv4();
    const upload = storage.ref(`${random}.jpg`).put(imageAsFile);
    upload.on(
      "state_changed",
      function (snapshot) {
        console.log(snapshot);
      },
      function (error) {
        console.log(error);
        alert("Image upload Failed");
      },
      function () {
        upload.snapshot.ref.getDownloadURL().then(function (donloadUrl) {
          setFromData({
            ...formData,
            imageUri: donloadUrl,
          });
        });
      }
    );

    setFromData({
      title: "",
      desc: "",
      imageUri: "",
    });
    setImageAsFile("");
  };

  return (
    <div className="col-md-6 offset-md-3 p-5">
      {redirect && <Redirect to="/" />}
      <h1 className="display-1">Add Article</h1>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Blog Title"
            onChange={(e) =>
              setFromData({
                ...formData,
                title: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Material</label>
          <textarea
            type="textarea"
            className="form-control"
            placeholder="Blog Material"
            rows="8"
            required
            onChange={(e) =>
              setFromData({
                ...formData,
                desc: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            placeholder="Blog Image"
            required
            onChange={(e) => {
              const img = e.target.files[0];
              setImageAsFile((imageFile) => img);
              console.log(img);
            }}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-info">
          Add Article
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
