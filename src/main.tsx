import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProviderHook } from "./pages/config/layouts";
import "./styles/base.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProviderHook />
  </StrictMode>
);
