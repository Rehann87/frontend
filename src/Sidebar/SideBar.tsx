
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import background1 from "../images/background1.avif";
import { SlLogout } from "react-icons/sl";
import { GoHistory } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { TbCategory } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        toast("Logout successfully");
    };

    return (
        <div
            className="w-64 h-screen bg-cyan-800 text-gray-400 shadow-lg text-lg flex flex-col p-5 bg-cover"
            style={{ backgroundImage: `url(${background1})` }}
        >
            <Link to="home">
                <div className="flex items-center h-10 mt-6 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
                    <IoHomeOutline className="mt-1 mr-3" />
                    <p>Home</p>
                </div>
            </Link>
            <hr />

            <Link to="category-list">
                <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
                    <TbCategory className="mt-1 mr-3" />
                    <p>Categories</p>
                </div>
            </Link>

            <Link to="transaction">
                <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
                    <GrTransaction className="mt-1 mr-3" />
                    <p>Transaction</p>
                </div>
            </Link>

            <Link to="transaction-history">
                <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
                    <GoHistory className="mt-1 mr-3" />
                    <p>History</p>
                </div>
            </Link>

            <div className="flex items-center h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold p-2 rounded">
                <button onClick={handleLogout} className="flex items-center w-full">
                    <SlLogout className="mt-1 mr-3" />
                    <p>Logout</p>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;


