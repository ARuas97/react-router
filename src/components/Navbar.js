import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    // const navigate = useNavigate();
    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         navigate("/about");
    //     }, 2000);

    //     // Clean up the timer on component unmount
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [navigate]);

    return(
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment">Gloria</a>
            <div className="ui right floated header">
                <button className="ui button"><Link to="/">Home</Link></button>
                <button className="ui button"><NavLink to="/about">About</NavLink></button>
                <button className="ui button"><NavLink to="/contact">Contact</NavLink></button>
            </div>

        </nav>
    )
}

export default Navbar;