import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import play from '../../assets/play.png'
import info from '../../assets/info.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'
const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <Navbar />  {/* NOW navbar will appear on top of the image */}
        
        <img 
          src="https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg" 
          alt="" 
          className='netflixbackground'
        />

        <div className="title">
          <p>THE WARRIOR OF THE KING</p>
          <h6>Little Baby bum bahubali the lover king of kotha tales man</h6>
          <h6>nation of hte independence of the india it is provode be a indian</h6>
          <div className="hero-btns">
            <button className='btn'><img src={play} alt="playbutton" /><p>play</p></button>
             <button className='btn'><img src={info} alt="infobtn" /><p>more info</p></button>
          </div>
          <TitleCards title={"Popular moives"}/>
        </div>
      </div>
      <div className="more-cards">
        
        <TitleCards title={"Blockbuster moives"} category={"popular"}/>
        <TitleCards title={"only on netflix"}  category={"top_rated"}/>
        <TitleCards title={"Upcoming"}  category={"upcoming"}/>
      
      <Footer/>
    </div>
    </div>
  )
}

export default Home
