import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import App from "./App";
import "./index.css";
import { Route } from "./lib/Route";
import { Router } from "./lib/Router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={<App />} />
      <Route path="/about" component={<About />} />
    </Router>
  </React.StrictMode>
);
