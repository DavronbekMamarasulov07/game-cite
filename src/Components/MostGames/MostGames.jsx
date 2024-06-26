import React from 'react'
import { mostGamesCard } from '../../db'
import classes from "./MostGames.module.css"

const MostGames = () => {
    return (
        <section className={classes.most_games_card}>
            <h2 className={classes.games_card_title}>
                Most popular <br />
                Game
            </h2>
            <div className={classes.most_games_card_wrapper}>

                {
                    mostGamesCard.map((element, index) =>
                        <div className={classes.m_card} key={index} style={{ backgroundImage: `url(${element.img})` }}>
                            <h3 className={classes.m_card_title}>{element.title}</h3>
                            <div className={classes.card_rating_content}>
                                <img src={element.ratingStar} alt={element.title} />
                                <p >{element.rating}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default MostGames
