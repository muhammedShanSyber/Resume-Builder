import { useState } from "react";
import CenterCanvas from "./components/CenterCanvas";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <LeftSideBar />
      <CenterCanvas />
      <RightSideBar />
    </div>
  );
}

export default App;
