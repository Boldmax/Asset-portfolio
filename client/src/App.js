import { useState } from "react";
import './App.css';
import Main from './components/main/Main';
import RightBar from './components/rightBar/RightBar';
import SideBar from './components/sidebar/SideBar';

function App() {

  const [theme, setTheme] = useState();

  const toggler = () => {
    setTheme(!theme)
  };

  let themeClass = ["body"];
  !theme ? themeClass.push("dark-theme-variables") : themeClass.join(" ")

  return (
    <div className={themeClass.join(" ")}>
      <div className="container">
        <SideBar />
        <Main />
        <RightBar toggler={toggler} theme={theme} />
      </div>
    </div>
  );
}

export default App;