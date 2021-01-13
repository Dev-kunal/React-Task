import React from "react";

function Element(props) {
  return (
    <div className="row align-self-center marg">
      <div className="col-sm-6 mx-auto">
        <div className="shadow p-4 mb-3 bg-white rounded">
          <h6>
            <a href={props.path}>{props.heading}</a>
          </h6>
        </div>
      </div>
    </div>
  );
}
export default Element;
