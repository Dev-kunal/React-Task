import axios from "axios";
import React, { useEffect, useState } from "react";
import Axios from "axios";

function EnquiryDetail(props) {
  const [enqDetail, setenqDetail] = useState({
    Name: "",
    Mobile: "",
    Address: "",
    Courses: "",
    EnquiryFor: "",
    EnquiryDate: "",
    FollowupDate: "",
    HowDiduhearaboutus: "",
    comments: "",
  });

  useEffect(() => {
    let id = props.id;
    Axios.get(`http://localhost:8989/api/v1/enquiry/getById/${id}`)
      .then((data) => {
        console.log(data.data.data);
        // var {
        //   Name,
        //   Mobile,
        //   Address,
        //   Courses,
        //   EnquiryFor,
        //   EnquiryDate,
        //   FollowupDate,
        //   HowDiduhearaboutus,
        //   comments,
        // } = data.data.data;
        setenqDetail(data.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="enq-form-modal" style={{border:"1px solid Black"}}>
      {/* <p>{Name}</p>
      <p>{Mobile}</p>
      <p>{Address}</p>
      <p>{Courses}</p>
      <p>{EnquiryFor}</p>
      <p>{EnquiryDate}</p>
      <p>{FollowupDate}</p>
      <p>{HowDiduhearaboutus}</p> 
      <p>{comments}</p> */}
    </div>
  );
}

export default EnquiryDetail;
