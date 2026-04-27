import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MissionProvider } from "./context/MissionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MissionProvider>
      <App />
    </MissionProvider>
  </React.StrictMode>
);