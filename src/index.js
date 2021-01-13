import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);