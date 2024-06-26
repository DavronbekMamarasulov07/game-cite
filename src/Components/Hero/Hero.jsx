import React from 'react'
import classes from "./Hero.module.css"


const Hero = () => {
  return (
    <section className={classes.hero}>
          <div className={classes.hero_content}>
            <div className={classes.hero_content_wrapper}>
              <h1 className={classes.hero_content_title}>
                The Forbidden Kingdom Adventure War
              </h1>
              <a className={classes.hero_content_link} href="#">More Details</a>
            </div>
          </div>
    </section>
  )
}

export default Hero
