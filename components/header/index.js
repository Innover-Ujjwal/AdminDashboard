import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/image/logo.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../search";
import { CiLight } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import img from "../../assests/image/mine.png";

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { IoIosSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import './header.css';
import { Mycontext } from "../../App";

const Header = () => {
    const [anchorElAccount, setAnchorElAccount] = useState(null);
    const [anchorElNotification, setAnchorElNotification] = useState(null);
    const [anchorElMenu, setAnchorElMenu] = useState(null);
    const [anchorElLight, setAnchorElLight] = useState(null);
    const [anchorElCart, setAnchorElCart] = useState(null);
    const [anchorElMail, setAnchorElMail] = useState(null);

    const openAccountMenu = Boolean(anchorElAccount);
    const openNotificationMenu = Boolean(anchorElNotification);
    const openMenu = Boolean(anchorElMenu);
    const openLightMenu = Boolean(anchorElLight);
    const openCartMenu = Boolean(anchorElCart);
    const openMailMenu = Boolean(anchorElMail);


    const context = useContext(Mycontext)

    const handleAccountMenuClick = (event) => {
        setAnchorElAccount(event.currentTarget);
    };
    const handleAccountMenuClose = () => {
        setAnchorElAccount(null);
    };

    const handleNotificationMenuClick = (event) => {
        setAnchorElNotification(event.currentTarget);
    };
    const handleNotificationMenuClose = () => {
        setAnchorElNotification(null);
    };

    const handleMenuClick = (event) => {
        setAnchorElMenu(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorElMenu(null);
    };

    const handleLightMenuClick = (event) => {
        setAnchorElLight(event.currentTarget);
    };
    const handleLightMenuClose = () => {
        setAnchorElLight(null);
    };

    const handleCartMenuClick = (event) => {
        setAnchorElCart(event.currentTarget);
    };
    const handleCartMenuClose = () => {
        setAnchorElCart(null);
    };

    const handleMailMenuClick = (event) => {
        setAnchorElMail(event.currentTarget);
    };
    const handleMailMenuClose = () => {
        setAnchorElMail(null);
    };

    const notifications = [
        "You have 5 new orders pending approval.",
        "Stock alert: Only 10 units left of 'Wireless Mouse'.",
        "New customer review on 'Bluetooth Headphones'."
    ];

    const messages = [
        {
            sender: "Alice",
            content: "Could you review the latest product descriptions?",
            timestamp: "2 hours ago"
        },
        {
            sender: "Bob",
            content: "Customer complaint received about delayed shipment.",
            timestamp: "5 hours ago"
        },
        {
            sender: "Charlie",
            content: "Meeting rescheduled to Monday at 10 AM.",
            timestamp: "Yesterday"
        }
    ];

    const cartItems = [
        {
            name: "Wireless Mouse",
            quantity: 10,
            price: 29.99
        },
        {
            name: "USB-C Cable",
            quantity: 25,
            price: 9.99
        }
    ];

    const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center w-100">
                        {/* logo wraooer*/}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center logo">
                                <img src={logo} alt="Logo" />
                                <span className="ml-2">HOTASH</span>
                            </Link>
                        </div>
                        <div className="col-xs-3 d-flex align-item-center part2 pl-4">
                            <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                                {
                                    context.isToggleSidebar===false ? <MdMenuOpen/> :
                                    <MdOutlineMenu/>

                                }
                            </Button>
                            
                            <SearchBox></SearchBox>
                        </div>
                        <div className="col-sm-6 d-flex align-items-center justify-content-end part3">
                            <Button className="rounded-circle mr-3" onClick={handleLightMenuClick}><CiLight /> </Button>
                        
                            <Button className="rounded-circle mr-3" onClick={handleCartMenuClick}><IoCartOutline /> </Button>
                            <Menu
                                anchorEl={anchorElCart}
                                id="cart-menu"
                                open={openCartMenu}
                                onClose={handleCartMenuClose}
                                onClick={handleCartMenuClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <FaShoppingCart /> <strong>Cart Items</strong>
                                </MenuItem>
                                <Divider />
                                {cartItems.map((item, index) => (
                                    <MenuItem key={index} onClick={handleCartMenuClose}>
                                        {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                                    </MenuItem>
                                ))}
                                <Divider />
                                <MenuItem onClick={handleCartMenuClose}>
                                    <strong>Total: ${total.toFixed(2)}</strong>
                                </MenuItem>
                            </Menu>
                            <Button className="rounded-circle mr-3" onClick={handleMailMenuClick}><MdOutlineMailOutline /> </Button>
                            <Menu
                                anchorEl={anchorElMail}
                                id="mail-menu"
                                open={openMailMenu}
                                onClose={handleMailMenuClose}
                                onClick={handleMailMenuClose}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <AiFillMessage /> <strong>Messages</strong>
                                </MenuItem>
                                <Divider />
                                {messages.map((message, index) => (
                                    <MenuItem key={index} onClick={handleMailMenuClose}>
                                        <div>
                                            <strong>{message.sender}</strong>
                                            <p>{message.content}</p>
                                            <em>{message.timestamp}</em>
                                        </div>
                                    </MenuItem>
                                ))}
                                <Divider />
                            </Menu>

                            <div className="dropdownwrapper">
                                <Button className="rounded-circle mr-3" onClick={handleNotificationMenuClick}><IoMdNotificationsOutline /> </Button>
                                <Menu
                                    anchorEl={anchorElNotification}
                                    className="notification"
                                    id="notification"
                                    open={openNotificationMenu}
                                    onClose={handleNotificationMenuClose}
                                    onClick={handleNotificationMenuClose}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <FaRegBell /> <strong>Notifications</strong>
                                    </MenuItem>
                                    <Divider />
                                    {notifications.map((notification, index) => (
                                        <MenuItem key={index} onClick={handleNotificationMenuClose}>
                                            {notification}
                                        </MenuItem>
                                    ))}
                                    <Divider />
                                </Menu>
                            </div>

                            {
                                context.isLogin!==true ? 
                                <Link to={'/login'}><Button className='btn-blue btn-lg btn-round '>Sign-In</Button></Link>
                                :
                                <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleAccountMenuClick}>
                                    <div className="userImg">
                                        <span className="rounded-circle">
                                            <img src={img} alt="user" className="user-img" />
                                        </span>
                                    </div>
                                    <div className="userInfo">
                                        <h4>Ujjwal Kumar</h4>
                                        <p className="mb-0">ujjwal.kumar@.com</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={anchorElAccount}
                                    id="account-menu"
                                    open={openAccountMenu}
                                    onClose={handleAccountMenuClose}
                                    onClick={handleAccountMenuClose}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleAccountMenuClose}>
                                        <MdAccountCircle /> Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleAccountMenuClose}>
                                        <MdAccountCircle /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleAccountMenuClose}>
                                        <ListItemIcon>
                                            <IoIosSettings />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleAccountMenuClose}>
                                        <ListItemIcon>
                                            <IoLogOut />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                            }

                           

                          
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
