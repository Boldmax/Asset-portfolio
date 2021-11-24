import "./Home.css";
import Navbar from '../navbar/Navbar';
import { useState } from "react";
import Donation from '../queryForms/donation/Donation'

const HomePage = () => {
    const [toggle, setToggle] = useState(true);
    const popUp = () => {
        setToggle(!toggle)
    };
    return (
        <>
            <Donation toggle={toggle} popUp={popUp} />
           {/*  <Volunteer open={open} volunt={volunt} />
            <Message /> */}
            <Navbar popUp={popUp} />
            <section className="home" id="home">
                <div className="content">
                    <h3>good shoes take you places</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                       Placeat labore, sint cupiditate distinctio tempora reiciendis.</p>
                    <a href="#menu" className="btn">get yours now</a>
                </div>
            </section>
        </>
    )
}

export default HomePage;