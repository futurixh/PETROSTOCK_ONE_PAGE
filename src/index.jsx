import React from "react";
import ReactDOMClient from "react-dom/client";
import { OnePage } from "./screens/OnePage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OnePage />);
