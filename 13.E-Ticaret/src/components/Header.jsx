import React from 'react'
import '../css/Header.css';
import { SlBasketLoaded } from "react-icons/sl";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';



function Header() {

    const [theme, setTheme] = useState(false);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (theme) {
            root.style.backgroundColor = "#222222";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "#222222"
        }
        setTheme(!theme);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className='flex-row' onClick={() => navigate("/")} >
                <img className='logo' src="./src/images/logo.png" />
                <p className='logo-text'>Salih</p>
            </div>

            <div className='flex-row' >
                <input className='search-input' type="text" placeholder='Bir şeyler ara ' />

                <div>

                    {theme ? <FaMoon className='icons' onClick={changeTheme} /> : <CiLight className='icons' onClick={changeTheme} />}

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <SlBasketLoaded style={{ marginRight: '8px' }} className='icons' />
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default Header