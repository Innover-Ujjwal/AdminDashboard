import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiMessengerFill } from "react-icons/ri";
import { FaProductHunt } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { FaUnlockAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import './sidebar.css';
import { Mycontext } from '../../App';

const Sidebar = () => {
    const [productDropdown, setProductDropdown] = useState(false);
    const [newNotifications, setNewNotifications] = useState(5); // Example number of new notifications
    const [newMessages, setNewMessages] = useState(3); // Example number of new messages

    const toggleProductDropdown = () => {
        setProductDropdown(!productDropdown);
    };

    const context = useContext(Mycontext)

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                        <Button className='w-100'>
                            <span className='icon'><MdDashboard /> </span>
                            Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button className='w-100' onClick={toggleProductDropdown}>
                        <span className='icon'><FaProductHunt /> </span>
                        Product
                        <span className='arrow'>{productDropdown ? <FaAngleDown /> : <FaAngleRight />}</span>
                    </Button>
                    {productDropdown && (
                        <div className="dropdown-options">
                            <Link to="/product/list">
                                <Button className='w-100'>Product List</Button>
                            </Link>
                            <Link to="/product/view">
                                <Button className='w-100'>Product View</Button>
                            </Link>
                            <Link to="/product/upload">
                                <Button className='w-100'>Product Upload</Button>
                            </Link>
                        </div>
                    )}
                </li>
                <li>
                    <Link to="/users">
                        <Button className='w-100'>
                            <span className='icon'><FaUserAlt /> </span>
                            Users
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/finance">
                        <Button className='w-100'>
                            <span className='icon'><FaMoneyBillTrendUp /> </span>
                            Finance
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <Button className='w-100'>
                            <span className='icon'><FaCartArrowDown /> </span>
                            Cart
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/messages">
                        <Button className='w-100'>
                            <span className='icon'><RiMessengerFill /> </span>
                            Messages
                            <span className='badge'>{newMessages}</span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/notifications">
                        <Button className='w-100'>
                            <span className='icon'><IoNotifications /> </span>
                            Notification
                            <span className='badge'>{newNotifications}</span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <Button className='w-100'>
                            <span className='icon'><IoSettingsSharp /> </span>
                            Setting
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/authentication">
                        <Button className='w-100'>
                            <span className='icon'><FaUnlockAlt /> </span>
                            Authentication
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <Button className='w-100'>
                            <span className='icon'><LuLogOut /> </span>
                            Logout
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
