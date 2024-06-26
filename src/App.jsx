import classes from "./App.module.css"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import MostGames from "./Components/MostGames/MostGames"
import NewGames from "./Components/NewGames/NewGames"
import Dashboard from "./Components/Dashboard/Dashboard"


function App() {
  return (
    <>
      <Navbar/>
      <div className={classes.main_wrapper}>
          <div className={classes.container}>
              <Hero/>
              <MostGames/>
              <NewGames/>
          </div>
          <Dashboard/>
      </div>
      
    </>
  );
}

export default App;
