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
      <div className="flex-1 bg-white    justify-center items-center border-x">
        <div className="flex items-center justify-center ">
          <h2 className="text-center text-2xl font-bold mb-2">
            Own Resume Builder
          </h2>
          <button>Dark Mode</button>
        </div>

        <div className="w-full h-4/5 bg-gray-50 shadow-md p-6 rounded-md">
          <div className="h-full border-2 border-dashed border-gray-300 flex justify-center items-center">
            <span className="text-gray-400">Drag and Drop to Build Resume</span>
          </div>
        </div>
      </div>
      ;
      <RightSideBar />
    </div>
  );
}

export default App;
