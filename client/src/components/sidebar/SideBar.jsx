import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { BiReceipt, BiLineChart, BiPlus } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { AiFillAppstore, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

const SideBar = ({ nav, navShow }) => {
    let history = useHistory();

    const home = () => {
        return history.push('/')
    }

    let navbarClass = ["aside"];
    nav ? navbarClass.push("active") : navbarClass.join(" ")

    return (
        <div className={navbarClass.join(" ")}>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="banner" />
                    <h2 onClick={home}>TRADE<span className="primary">PRO</span></h2>
                </div>
                <div className="close" id="close-btn" onClick={navShow}>
                    <span className="material-icons-sharp">Close</span>
                </div>
            </div>

            <div className="sidebar">
                <Link to="/dashboard" className="active" onClick={navShow}>
                    <span ><AiFillAppstore /></span>
                    <h3>Overview</h3>
                </Link>
                <Link to="/dashboard/portfolio" className="active" onClick={navShow}>
                    <span><BiReceipt /></span>
                    <h3>Portfolio</h3>
                </Link>
                <Link to="/dashboard/analytics" className="active" onClick={navShow}>
                    <span><BiLineChart /></span>
                    <h3>Analytics</h3>
                </Link>
                <Link to="/dashboard/settings" className="active" onClick={navShow}>
                    <span><AiOutlineSetting /></span>
                    <h3>Settings</h3>
                </Link>
                <a href="#" className="active" onClick={navShow}>
                    <span><BiPlus /></span>
                    <h3>Add Product</h3>
                </a>
                <a href="#">
                    <span><AiOutlineLogout /></span>
                    <h3>Logout</h3>
                </a>
            </div>
        </div>
    )
}

export default SideBar;
