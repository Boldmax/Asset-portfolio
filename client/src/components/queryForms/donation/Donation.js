import "./Donation.css";
/* import logo from "../../pages/images/logo1.jpg"; */
import { FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const Donation = ({ toggle, popUp }) => {
    let history = useHistory();

    let navbarClas = ["donation"];
    toggle ? navbarClas.push("active") : navbarClas.join(" ")

    const donate = () => { history.push('/dashboard') }

    const signUp = () => {
        return console.log('object')
    }


    return (
        <div className={navbarClas.join(" ")}>
            <div className="topbar">
                <img /* src={logo} */ alt="Logo" />
                <FaTimes className="times" onClick={popUp} />
            </div>

            <div className="donation-box">
                <h3>Log In To Aceess Dashboard</h3>
                <form>
                    <input type="text" placeholder="Email" />

                    <input type="text" placeholder="Password" />

                    <button onClick={donate}>Log In</button>
                </form>

            </div>

            <div className="botomBar">Don't have an account?
                <span onClick={signUp} > Sign Up</span>
            </div>
        </div>
    )
}

export default Donation;