import React, { useEffect, useState } from "react";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert"; //
import "react-confirm-alert/src/react-confirm-alert.css"; // \

function EnquiryForm() {
  const [formData, setformData] = useState({
    Name: "",
    Mobile: "",
    Address: "",
    Courses: "",
    EnquiryFor: "",
    FollowupDate: "",
    EnquiryDate: new Date().toLocaleDateString(),
    HowDiduhearaboutus: "",
    comments: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    var shouldSave = window.confirm("Do you want to send ");
    if (shouldSave) {

      Axios.post("http://localhost:8989/api/v1/enquiry/addEnquiry", formData)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      setformData({
        Name: "",
        Mobile: "",
        Address: "",
        Courses: "",
        EnquiryFor: "",
        EnquiryDate: new Date().toLocaleDateString(),
        FollowupDate: "",
        HowDiduhearaboutus: "",
        comments: "",
      });
    } else {
      setformData(formData);
    }
  }

  function handlechange(event) {
    const { name, value } = event.target;
    setformData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <div className="form">
        <br />
        <h4>Enquiry Form</h4>
        <br />
        <form name="regi_form" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-sm-4 align-self-center">
              <input
                type="text"
                name="Name"
                placeholder="Student Name"
                value={formData.Name}
                required
                onChange={handlechange}
              />
            </div>
            <div className="col-sm-4 align-self-center">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="Mobile"
                placeholder="Mobile No."
                value={formData.Mobile}
                onChange={handlechange}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 align-self-center">
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                required
                onChange={handlechange}
              />
            </div>

            <div className="col-sm-4 align-self-center">
              <select
                className="form-control"
                name="Courses"
                required
                id="exampleFormControlSelect1"
                value={formData.Courses}
                onChange={handlechange}
              >
                <option value="">Select a Batch</option>
                <option value="Batch7am">Batch7am</option>
                <option value="Batch8am">Batch8am</option>
                <option value="Batch9am">Batch9am</option>
                <option value="Batch10am">Batch10am</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 align-self-center">
              <input
                type="text"
                required
                name="EnquiryFor"
                onChange={handlechange}
                value={formData.EnquiryFor}
                placeholder="Enquiry For"
              />
            </div>
            <div className="col-sm-4 align-self-center">
              <input
                type="text"
                name="EnquiryDate"
                placeholder="Todays Date"
                readOnly
                value={formData.EnquiryDate}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 align-self-center">
              <input
                type="date"
                name="FollowupDate"
                placeholder="Follow Up Date(optional)"
                value={formData.FollowupDate}
                onChange={handlechange}
              />
            </div>

            <div className="col-sm-4 align-self-center">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handlechange}
                name="HowDiduhearaboutus"
                required
                value={formData.HowDiduhearaboutus}
              >
                <option value="">How Did you Hear About us</option>
                <option value="Email from Academy">Email from Academy</option>
                <option value="facebook">facebook</option>
                <option value="YouTube">YouTube</option>
                <option value="Friend">Friend</option>
                <option value="Former Student">Former Student</option>
              </select>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 align-self-left">
              <input
                type="text"
                onChange={handlechange}
                name="comments"
                value={formData.comments}
                placeholder="Comments"
              />
            </div>
            <div className="col-sm-4 align-self-left"></div>
          </div>
          <div className="row justify-content-center my-3 btn-container">
            <div className="col-sm-4 align-self-center">
              <button
                type="submit"
                className="btn-sm btn btn-primary mx-3 btn-block"
               
              >
                Save
              </button>
              <button className="btn-sm btn btn-danger mx-3 btn-block">
                Cancel
              </button>
            </div>
            <div className="col-sm-4 align-self-left"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EnquiryForm;
