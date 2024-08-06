import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootApp from "./App";
import { BrowserRouter } from "react-router-dom";
import { Header } from "@components/header/Header";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <RootApp />
  </BrowserRouter>
);
