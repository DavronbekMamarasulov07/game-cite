import React from 'react'
import { newGamesCard } from '../../db'
import classes from "./NewGames.module.css"

const NewGames = () => {
    return (
        <section className={classes.new_games_card}>
            <h2 className={classes.games_card_title}>
                New Released Games
            </h2>
            <div className={classes.new_games_card_wrapper}>

                {
                    newGamesCard.map((element, index) =>
                        <div className={classes.n_card} key={index}>
                            <img className={classes.n_card_img} src={element.img} alt={element.title} />
                            <div className={classes.n_card_wrapper}>
                                <h3 className={classes.n_card_title}>
                                    {element.title}
                                </h3>
                                <p className={classes.n_card_description}>{element.description}</p>
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
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default NewGames
