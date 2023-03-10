import logo from "@/assets/svg/logo.svg";
import { useState } from "react";

function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button
          className="rounded-md bg-blue-900 py-2 px-4"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>App.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </header>
  );
}

export default HomePage;
