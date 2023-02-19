import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Anime from "../components/Anime";
import styles from "./Home.module.css"
import rab from "../img/rightArrow.png";
import lab from "../img/leftArrow.png";
import NavBar from "../components/NavBar";

function Home() {
  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const getAnimes = async () => {
    const json = await (await fetch(
      `https://kitsu.io/api/edge/trending/anime`
    )).json();
    setAnimes(json.data);
    setLoading(false);
  }
  useEffect(() => {
    getAnimes();
  }, []);
  console.log(animes[0]);

  const [animeCnt, setAnimeCnt] = useState(0);


  return (
    <div>
      {loading ? <div><span>아키하바라로 가는중...</span></div> :
        <div>
          <NavBar />




          <div className={styles.animesScroll}>
            <img className={styles.btn} src={lab} alt="leftArrowBtn" />
            <div className={styles.animes}>
              {animes.map((anime, index) =>
                <Anime
                  key={anime.id}
                  score={index + 1}
                  id={parseInt(anime.id)}
                  year={anime.attributes.createdAt}
                  coverImg={anime.attributes.posterImage.medium}
                  title={anime.attributes.canonicalTitle}
                  synopsis={anime.attributes.synopsis}
                />)}
            </div>
            <img className={styles.btn} src={rab} alt="rightArrowBtn" />
          </div>
        </div>}
    </div>
  )
}

export default Home;