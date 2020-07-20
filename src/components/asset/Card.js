import React from "react";

const Card = ({
  cardTitle = "Blog title",
  blogDesc = "This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.",
  imgSrc,
  timeStamp,
}) => {
  return (
    <div className="card mb-5">
      <img className="card-img-top " height="300" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">{blogDesc}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">
          <small className="text-muted">{timeStamp}</small>
        </p>
        <button className=" float-right btn btn-outline-info">Read more</button>
      </div>
    </div>
  );
};

export default Card;
