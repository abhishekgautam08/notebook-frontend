import React from "react";

const Noteitem = (props) => {
  let { title, description, tag, key } = props;
  return (
    <>
      <div className="col-md-3">
        <div className="card my-3" key={key}>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{title}</h5>

              <i className="fa-solid fa-trash mx-2"></i>
              <i className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Noteitem;