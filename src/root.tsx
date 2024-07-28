import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootApp from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RootApp />
    </BrowserRouter>
  </React.StrictMode>
);