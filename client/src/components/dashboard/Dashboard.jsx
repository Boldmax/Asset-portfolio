import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import RightBar from '../rightBar/RightBar';
import SideBar from '../sidebar/SideBar';
import Analytics from '../analytics/Analytics';
import Portfolio from '../portfolio/Portfolio';
import Main from '../main/Main';
import Settings from "../settings/Settings";


const Dashboard = ({ toggler, theme }) => {
    const [nav, setNav] = useState(false);

    // responsive navbar
    const navShow = () => {
        setNav(!nav)
    };

    return (
        <div className="container">
            <Router>
                <SideBar nav={nav} navShow={navShow} />
                <Switch>
                    <Route path="/dashboard/" exact component={Main} />
                    <Route path="/dashboard/analytics" component={Analytics} />
                    <Route path="/dashboard/portfolio" component={Portfolio} />
                    <Route path="/dashboard/settings" exact component={() => <Settings toggler={toggler} theme={theme} />} />
                </Switch>
                <RightBar toggler={toggler} theme={theme} navShow={navShow} />
            </Router>
        </div>
    )
}

export default Dashboard;