import React, { useContext, useEffect } from 'react';

import { Route, Routes } from 'react-router';
import { ThemeContext } from '../Context/ThemeContext';
import Home from '../Container/Home/Home';
import Header from '../Component/Header/Header';

function UserRoute(props) {
    const ThemeData = useContext(ThemeContext)

    console.log(ThemeData);


    return (
        <div className={`${ThemeData.theme} bg-primary dark:bg-secondary font-Poppins`}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default UserRoute;