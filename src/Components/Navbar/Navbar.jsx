import React from 'react'
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_list_item}><a className={`${classes.nav_list_item_link} ${classes.selected}`} href="#">Game</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Live score</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Analitics</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Statistics</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Forecasts</a></li>
        </ul>
      </nav>
  )
}

export default Navbar
