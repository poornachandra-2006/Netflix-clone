import './TitleCards.css'
import CardsData from '../../assets/Cards-data.js'
import React,{ useEffect, useRef,useState} from 'react'
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {
const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWFlMDYxODU2OTI4YmIzYmE5ODNiMTY3NDUwYmMxZiIsIm5iZiI6MTc2NDQyMDU4My44OTIsInN1YiI6IjY5MmFlYmU3NzNjNDQzZWYxMDRkZjRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tBaOlKL5I9aFQS2NvEVaQ9oS9g_vCyJix-01X0mtVnY'
  }
};


  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
   
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => ( 
           <Link to={`/player/${card.id}`}className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path}  />
            <p>{card.original_title}</p>
            </Link>
        
        ))}
      </div>
    </div>
  )
}

export default TitleCards
