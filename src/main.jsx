import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import DataFetch from "./components/DataFetch.jsx";
import store from "./core/redux/store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <DataFetch />
    </Provider>
  </React.StrictMode>
);
