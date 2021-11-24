import "./Volunteer.css";
import logo from "../../pages/images/logo1.jpg";
import { FaTimes } from "react-icons/fa";

const Volunteer = ({ volunt, open }) => {

    let navbarClas = ["volunteer"];
    open ? navbarClas.push("active") : navbarClas.join(" ")

    return (
        <div className={navbarClas.join(" ")}>
            <div className="topbar">
                <img src={logo} alt="Logo" />
                <FaTimes className="times" onClick={volunt} />
            </div>

            <div className="volunteer-box">
                <h3>Kindly provide us with the following information.</h3>
                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="numbers" placeholder="Phone Number" />
                    <input type="date" placeholder="Date of birth" />
                    <input type="text" placeholder="Educational Qualification" />


                    <select name="volunteer" >
                        <option value="Any volunteer experience?">Any volunteer experience?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>

                    <button onClick={volunt}>Submit</button>
                </form>

            </div>

            <div className="botomBar">Thanks for your humanity</div>
        </div>
    )
}

export default Volunteer;
