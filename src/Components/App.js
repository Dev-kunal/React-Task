import React from "react";
import EnquiryForm from "./EnquiryForm";
import EntryOptions from "./EntryOptions";
import OpenEnquiry from "./OpenEnquiry";
import ClosedEnquiry from "./ClosedEnquiry";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Conversation from "./Modal-Items/Conversation";

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={EntryOptions} />
        <Route path="/enquiryform" component={EnquiryForm} />
        <Route path="/openenquiries" component={OpenEnquiry} />
        <Route path="/closedenquiries" component={ClosedEnquiry} />
        <Route path="/conversation" component={Conversation} />
      </Switch>
    </div>
  );
}
