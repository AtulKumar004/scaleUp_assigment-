import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.scss";

function Navbar() {
  const location = useLocation();

  return (
    <div className={`${styles.navbar} container`}>
      <div className={styles.nav_items}>
        <Link to="/">Video Game</Link>
        {location.pathname === "/" && (
          <span className={styles.shadow_title}>VIDEO</span>
        )}
      </div>

      <div className={styles.nav_items}>
        <Link to="/contact">Contact</Link>
        {location.pathname === "/contact" && (
          <span className={styles.shadow_title}>Contact</span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
