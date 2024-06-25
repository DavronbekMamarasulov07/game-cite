import React from 'react'
import classes from "./Home.module.css"
import { liveGamesCard, liveGamesCards, mostGamesCard, newGamesCard } from "../../db/index"

import userImg from "../../images/user.svg"
import bell from "../../images/bell.svg"




const Home = () => {
  return (
    
      <>
        <nav className={classes.nav}>
        <ul className={classes.nav_list}>
          <li className={classes.nav_list_item}><a className={`${classes.nav_list_item_link} ${classes.selected}`} href="#">Game</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Live score</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Analitics</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Statistics</a></li>
          <li className={classes.nav_list_item}><a className={classes.nav_list_item_link} href="#">Forecasts</a></li>
        </ul>
        
      </nav>
    <div className={classes.main_wrapper}>  
      <div className={classes.container}>
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
      </div>
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
            liveGamesCards.map((element,index) =>
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
          liveGamesCard.map((element,index) =>
            <div className={classes.d_live_card } key={index}>
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
    </div>
      </>
  )
}

export default Home



