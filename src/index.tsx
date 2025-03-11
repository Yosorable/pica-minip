/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App.jsx";
import SwipeOut from "./components/SwipeOut/index.jsx";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

root?.addEventListener("dblclick", (e) => e.preventDefault());

render(() => <App />, root as HTMLElement);
