import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { useSelector } from 'react-redux';


import React from 'react'

function Loading() {

    const { loading } = useSelector((store) => store.product);
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}

        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading