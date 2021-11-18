import React from 'react'
import {Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar />
                <Typography.Title level={2} className="logo">
                    <link to="/">cryptjam</link>
                </Typography.Title>
                <button className="menu-control-container">

                </button>

            </div>
            
        </div>
    )
}

export default Navbar
