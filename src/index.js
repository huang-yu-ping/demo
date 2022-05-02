import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import App from "./App";
import "./i18n/i18n";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
