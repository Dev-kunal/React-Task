import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Route, Link } from "react-router-dom";
import "./Modal-Items/Modal.css";

function ModalMenus(props) {
  
  
    return (
        <div>
          <p>
            <Link onClick={()=>props.setDetails (true)}>Enquiry Details</Link>
          </p>
          <p>
            <Link to="/conversation">Conversation</Link>
          </p>
          <p>
            <Link to="/addstudent">Add Student</Link>
          </p>
          <p>
            <Link to="/deleteenquiry">Delete Enquiry </Link>
          </p>
        </div>
    )
}

export default ModalMenus
