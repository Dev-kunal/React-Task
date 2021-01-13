import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EnquiryDetail from "./Modal-Items/EnquiryDetail";
import ModalMenus from "./ModalMenus";

function Mymodal(props) {
  
  const [enquiryDetail, setenquiryDetail] = useState(false);
  // const [Conversation, setConversation] = useState(false);

  
  return (

    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {enquiryDetail ? <EnquiryDetail id={props.id} /> :<ModalMenus setDetails={setenquiryDetail} />}  
      </Modal.Body>

      <Modal.Footer>
        <button className="btn-sm btn btn-primary mx-3 btn-block">Save</button>
        <Button
          onClick={() => { props.onHide();setenquiryDetail(false)}}
          className="btn-sm btn btn-danger mx-3 btn-block"
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Mymodal;
