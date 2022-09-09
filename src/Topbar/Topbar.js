import React from "react";


import classes from './Topbar.module.css';

const Topbar = (props) => {
    return (
        <header className="App-header">

            <nav className={classes.Topbar}>
                <img src='https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png' alt='amazone logo'/>
            </nav>
       
        </header>
    )
}

export default Topbar;