import "./Analytics.css";
import { BiLineChart } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineRise } from "react-icons/ai";
import dataSet from "../main/orders";
import { Line, Bar } from "react-chartjs-2";

const Main = () => {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Real Estate Portfolio Growth',
                data: [34, 25, 25, 30, 25, 40, 35, 20, 22, 27, 31, 24],
                borderColor: ['#ff7782'],
                backgroundColor: ['#6d99ce', 'white', 'green', 'yellow', 'red', 'purple'],
                pointBackgroundColor: '#363949',
                pointBorderColor: '#6d99ce'
            }
        ]
    }


    const piedata = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [
            {
                label: 'Real Estate Portfolio Growth',
                data: [34, 25, 30, 25, 40, 35],
                borderColor: ['#ff7782'],
                backgroundColor: ['#6d99ce', 'white', 'green', 'yellow', 'red', 'purple'],
                pointBackgroundColor: '#363949',
                pointBorderColor: '#6d99ce',
            }
        ]
    }


    return (
        <main>
            <h1>Analytics</h1>

            {/*  <div className="date">
                <input type="date" />
            </div> */}

            <div className="recent-orders">
                <h2>Portfolio Analysis</h2>
                <Line data={data} className="graph" />
                {/* <a href="#">Show All</a> */}
            </div>

            <div className="recent-orders">
                <h2>Wealth Distribution</h2>
                <Bar data={data} className="graph" />
                {/* <a href="#">Show All</a> */}
            </div>
        </main>
    )
}

export default Main;