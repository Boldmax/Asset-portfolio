import "./SideBar.css";
import logo from "../images/logo.png";
import { BiReceipt, BiLineChart, BiErrorAlt, BiPlus } from "react-icons/bi";
import { AiFillAppstore, AiOutlineUser, AiOutlineMail, AiOutlineFileDone, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";

const SideBar = () => {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="banner" />
                    <h2 >TRADE<span className="primary">PRO</span></h2>
                </div>
                <div className="close" id="close-btn">
                    <span className="material-icons-sharp">close</span>
                </div>
            </div>

            <div className="sidebar">
                <a href="#" className="active">
                    <span><AiFillAppstore /></span>
                    <h3>Dashboard</h3>
                </a>
                <a href="#" className="active">
                    <span><AiOutlineUser /></span>
                    <h3>Customers</h3>
                </a>
                <a href="#" className="active">
                    <span ><BiReceipt /></span>
                    <h3>Orders</h3>
                </a>
                <a href="#" className="active">
                    <span ><BiLineChart /></span>
                    <h3>Analytics</h3>
                </a>
                <a href="#" className="active">
                    <span ><AiOutlineMail /></span>
                    <h3>Messages</h3>
                    <span className="message-count">26</span>
                </a>
                <a href="#" className="active">
                    <span ><AiOutlineFileDone /></span>
                    <h3>Products</h3>
                </a>
                <a href="#" className="active">
                    <span ><BiErrorAlt /></span>
                    <h3>Reports</h3>
                </a>
                <a href="#" className="active">
                    <span ><AiOutlineSetting /></span>
                    <h3>Settings</h3>
                </a>
                <a href="#" className="active">
                    <span ><BiPlus /></span>
                    <h3>Add Product</h3>
                </a>
                <a href="#">
                    <span ><AiOutlineLogout /></span>
                    <h3>Logout</h3>
                </a>
            </div>
        </aside>
    )
}

export default SideBar;
