import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import RightBar from './components/rightBar/RightBar';
/*import SideBar from './components/sidebar/SideBar';*/
import Analytics from './components/analytics/Analytics';
import Portfolio from './components/portfolio/Portfolio';
import Main from './components/main/Main';
import HomePage from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";


function App() {

  const [theme, setTheme] = useState();

  const toggler = () => {
    setTheme(!theme)
  };

  let themeClass = ["body"];
  theme ? themeClass.push("dark-theme-variables") : themeClass.join(" ")

  return (
    <div className={themeClass.join(" ")}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" exact component={() => <Dashboard toggler={toggler} theme={theme} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;