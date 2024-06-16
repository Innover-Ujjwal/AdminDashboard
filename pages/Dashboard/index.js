import React, { useState } from "react";
import DashboardBox from "../components/componentBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";


import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './dashboard.css';


export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  export const options = {
    'backgroundColor': 'transparent',
  };


const Dashboard = () => {

    const [showby, setshowby] =useState('');
    const [CartegoryBy, setCartegoryBy] =useState('');
    const [SearchBy, setSearchBy] =useState('');
    const [BrandBy, setBrandby] =useState('');

    return (
        <>
            <div className="right-content w-100">
                <div className="row dashboardwrapperrow">
                    <div className="col-md-8">
                        <div className="dashboardwrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={FaUserCircle} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={IoMdCart} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={HiShoppingBag} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={GiStarsStack} />
                        </div>
                    </div>
                    <div className="col-md-4 pl-0">
                        <div className="box graphBox">
                            <div className="box-header">
                                <h4>Total Sales</h4>
                                <Button className="toggleIcon"><HiDotsVertical /></Button>
                            </div>
                            <div className="sales-info">
                                <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                                <p >$3,578.90 in last month</p>


                                <Chart
      chartType="AreaChart"
      width="350px"
      height="200px"
      data={data}
      options={options}
    />
                            </div>
                        </div>
                    </div>
                </div>




                <div className="card shadow border-0 p-3 mt-4">
                    <h3 className="hd">Best Selling Products</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>SHOW BY</h4>
                            <FormControl size="small" className="w-100">
                            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showby}
          label="Age"
          onChange={(e)=>setshowby(e.target.value)}
        inputProps={{'aria-label':'without label'}}
        className="w-100">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>CATEGORY BY</h4>
                            <FormControl size="small" className="w-100">                           
                             <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={CartegoryBy}
          label="Age"
          onChange={(e)=>setCartegoryBy(e.target.value)}
        inputProps={{'aria-label':'without label'}}
        className="w-100">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>BRAND BY</h4>
                            <FormControl size="small" className="w-100">                     
                                   <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={BrandBy}
          label="Age"
          onChange={(e)=>setBrandby(e.target.value)}
        inputProps={{'aria-label':'without label'}}
        className="w-100">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                        </div>

                        <div className="col-md-3">
                            <h4>SEARCH BY</h4>
                            <FormControl size="small" className="w-100">
                                                        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={SearchBy}
          label="Age"
          onChange={(e)=>setSearchBy(e.target.value)}
        inputProps={{'aria-label':'without label'}}
        className="w-100">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
                        </div>
                    </div>


                    <div className="table-responsive mt-3">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>UID</th>
                                    <th>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#1</td>
                                    <td>Shirts for Boys</td>
                                    <td>Men</td>
                                    <td>richman</td>
                                    <td>$20.00</td>
                                    <td>30</td>
                                    <td>4.9(16)</td>
                                    <td>380</td>
                                    <td>$35k</td>
                                    <td>#1</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
