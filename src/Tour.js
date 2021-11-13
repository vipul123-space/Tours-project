import React from "react";

function Tour({ tour }) {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <>
      <img className="tour-image" src={tour.image} alt="" />
      <div className="main-info">
        <div className="title-price">
          <h3 className="title">{tour.name}</h3>
          <p className="price">{tour.price}$</p>
        </div>
        <p className="info">
          {readMore ? tour.info : `${tour.info.substring(0, 200)}....`}
          <button
            className="read-toggle"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
      </div>
    </>
  );
}

export default Tour;
