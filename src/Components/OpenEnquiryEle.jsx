import axios from "axios";
import React,{useState} from "react";

function OpenEnquiryEle(props) {
  
 
  return (
    <div className="row align-self-center marg">
      <div className="col-sm-6 mx-auto">
        <div className="shadow p-2 mb-3 bg-white rounded" onClick={props.onClick}>
          <div className="row">
            <div className="col text-left">
              <p>{props.number}</p>
            </div>
            <div className="col text-center">
              <p>{props.enquiry.Name}</p>
            </div>
            <div className="col text-right">
              <p>{props.enquiry.EnquiryDate}</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-left">
              <p>{props.enquiry.Courses}</p>
            </div>
            <div className="col text-center">
              <p>{props.enquiry.Mobile}</p>
            </div>
            <div className="col text-right">
              <p>{props.enquiry.EnquiryFor}</p>
            </div>
            <div className="col text-right">
              <p>{props.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OpenEnquiryEle;
