import React, { useEffect, useState } from "react";
import OpenEnquiryEle from "./OpenEnquiryEle";
import Mymodal from "./Modal";
import Axios from "axios";

function OpenEnquiry() {
  const [showModal, setshowModal] = useState(false);
  const [enquiries, setenquiries] = useState([]);
  const [enqId, setEnqId] = useState(null);

  
  function handleClick(id) {
    setshowModal(true);
    setEnqId(id);
  }
  
  useEffect(() => {
    var enquiries = [];
    Axios.get("http://localhost:8989/api/v1/enquiry/getAllEnquiry")
      .then((data) => {
        enquiries = data.data.data;
        setenquiries(enquiries);
        console.log(enquiries);
      })
      .catch((err) => console.log(err));
  
  }, []);
  return (
    <>
      {enquiries.map((enq, ind) => (
        <>
        <OpenEnquiryEle onClick={()=>handleClick(enq._id)} enquiry={enq} number={ind + 1} key={ind} />
        <Mymodal show={showModal} onHide={()=> setshowModal(false)} id={enqId} />
        </>
      ))}
    </> 
  );
}
export default OpenEnquiry;
