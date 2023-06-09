import React, { useContext } from 'react';
import logo from '../../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogut =()=>{
        logOut()
        .then(
            localStorage.removeItem('car-access-token')
        )
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to={'/'}>Home</Link> </li>
                            <li> <Link to={'/'}>About</Link> </li>
                            <li> <Link to={'/'}>Services</Link> </li>
                            <li> <Link to={'/'}>Blog</Link> </li>
                            <li> <Link to={'/'}>Contact</Link> </li>
                        </ul>
                    </div>
                    <Link to={'/'}> <img src={logo} alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to={'/'}>Home</Link> </li>
                        <li> <Link to={'/'}>About</Link> </li>
                        <li> <Link to={'/'}>Services</Link> </li>
                        <li> <Link to={'/'}>Blog</Link> </li>
                        <li> <Link to={'/'}>Contact</Link> </li>
                        {user&&<li> <Link to={'/bookings'}>My bookings</Link> </li>}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="btn btn-outline btn-error ml-4">appinment</button>
               { !user && <Link to={'/login'}><button className="btn btn-outline btn-error ml-4">Login</button></Link>}
               {user && <button onClick={handleLogut} className="btn btn-outline btn-error ml-4">Logout</button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;