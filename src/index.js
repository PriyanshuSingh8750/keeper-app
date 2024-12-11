import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles.css";
import { ThemeProvider } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
