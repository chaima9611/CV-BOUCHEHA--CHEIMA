import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFound =() => {
    return (
        <div className='notFound'>
            <h3> Click home to check CHEIMA's portfolio  </h3>
            <NavLink exact to='/'>
                <i className='fas fa-home'></i>
                <span> Home</span>

            </NavLink>
        </div>
    );
};

export default NotFound