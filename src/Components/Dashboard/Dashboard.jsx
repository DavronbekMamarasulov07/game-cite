import React from 'react'
import { liveGamesCard, liveGamesCards } from '../../db'
import classes from "./Dashboard.module.css"

import userImg from "../../images/user.svg"
import bell from "../../images/bell.svg"

const Dashboard = () => {
    return (
        <section className={classes.dashboard}>
            <div className={classes.user_profile}>
                <div className={classes.user_info}>
                    <img src={userImg} alt="user" />
                    <strong>William jonson</strong>
                </div>
                <img src={bell} alt="bell" />
            </div>
            <h2 className={classes.d_title}>
                Live Game
            </h2>
            <div className={classes.d_card_wrapper}>
                {
                    liveGamesCards.map((element, index) =>
                        <div className={classes.d_card} key={index}>
                            <img className={classes.n_card_img} src={element.img} alt={element.title} />
                            <div className={classes.n_card_wrapper}>
                                <h3 className={classes.n_card_title}>
                                    {element.title}
                                </h3>
                                <p className={classes.n_card_description}>{element.description}</p>

                            </div>
                        </div>
                    )
                }
            </div>
            {
                liveGamesCard.map((element, index) =>
                    <div className={classes.d_live_card} key={index}>
                        <img src={element.img} alt={element.title} />
                        <div className={classes.d_live_card_wrapper}>
                            <h3 className={classes.d_live_card_title}>
                                {element.title}
                            </h3>
                            <strong className={classes.d_live_card_info}>
                                {element.info}
                            </strong>
                            <div className={classes.card_rating_content}>
                                <strong className={classes.card_rating}>
                                    {element.rating}
                                </strong>
                                <div className={classes.card_rating_img_item}>
                                    <img src={element.ratingStar} alt={element.title} />
                                    <img src={element.ratingStar} alt={element.title} />
                                    <img src={element.ratingStar} alt={element.title} />
                                    <img src={element.ratingStar} alt={element.title} />
                                    <img src={element.ratingStar2} alt={element.title} />
                                </div>
                            </div>
                            <p className={classes.d_live_card_des}>
                                {element.description}
                            </p>
                            <button className={classes.d_card_btn}>
                                Download Now
                            </button>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default Dashboard
