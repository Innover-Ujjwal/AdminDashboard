import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

import './componentbox.css';

const DashboardBox = (props) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`
    };

    return (
        <Button className="dashboardbox" style={gradientStyle}>

        {
            props.grow ===true ?
            <span className="chart"><TrendingUpIcon/></span>

            :

            <span className="chart"><TrendingDownIcon/></span>
        }
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white mb-0">Total Users</h4>
                    <span className="text-white">277</span>
                </div>
                <div className="ml-auto">
                    {props.icon && <span className="icon">{React.createElement(props.icon)}</span>}
                </div>
            </div>

            <div className="d-flex align-items-centre w-100 bottomEle">
                <h6 className="text-white mb-0 mt-0">Last Month</h6>
                <Button className="ml-auto toggleIcon"><HiDotsVertical/></Button>
            </div>
        </Button>
    );
}

export default DashboardBox;
