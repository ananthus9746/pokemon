// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/code-snippet">Code Snippet</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
