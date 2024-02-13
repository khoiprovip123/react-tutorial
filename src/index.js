import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const number = [1, 2, 3, 4, 5];
const [first, ...rest] = number;

console.log(first, rest);
//////

const addressHome = {
  address: "cauke",
  city: "travinh",
  country: "vietnam",
};

const { address, city } = addressHome;
console.log(address);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
