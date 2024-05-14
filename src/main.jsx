import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GitHubProvider } from "./components/hooks/GithubContext.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/hooks/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GitHubProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </GitHubProvider>
    </BrowserRouter>
  </React.StrictMode>
);
