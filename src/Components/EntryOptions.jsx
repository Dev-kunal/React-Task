import React from "react";
import Element from "./Element";
function EntryOptions(props) {
  return (
    <div>
      <Element heading="New Enquiry" path="/enquiryform" />
      <Element heading="Open Enquiries" path="/openenquiries" />
      <Element heading="Closed Enquiries" path="/closedenquiries" />
      <Element heading="Today's follow Up" path="/todaysfollowup" />
    </div>
  );
}

export default EntryOptions;
