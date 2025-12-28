import './Player.css'
import backarrow from '../../assets/backarrow.png'  
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Player = () => {
  const {id} = useParams();

  const navigate = useNavigate();

   const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
   });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWFlMDYxODU2OTI4YmIzYmE5ODNiMTY3NDUwYmMxZiIsIm5iZiI6MTc2NDQyMDU4My44OTIsInN1YiI6IjY5MmFlYmU3NzNjNDQzZWYxMDRkZjRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tBaOlKL5I9aFQS2NvEVaQ9oS9g_vCyJix-01X0mtVnY'
  }
};
useEffect(()=>{
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className="player">
      <img src={backarrow} alt="" onClick={()=>{navigate(-2)}} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="devudu song"
        style={{ border: 'none' }}
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
