import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Anime from "../components/Anime";
import styles from "./Home.module.css"
import rab from "../img/rightArrow.png";
import lab from "../img/leftArrow.png";
import load from "../img/loading.gif";
import NavBar from "../components/NavBar";

function Home() {
  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [pages, setPages] = useState(0);
  const getAnimes = async () => {
    const json = await (await fetch(
      `https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=5&page[offset]=${pages}`
    )).json();
    setLoading(false);
    setAnimes(json.data);
  }
  useEffect(() => {
    getAnimes();
    setLoading(true);
  }, [pages]);


  const [animeCnt, setAnimeCnt] = useState(0);

  let loadArray = [1, 2, 3, 4, 5];

  // banner 제작중 23.3.4
  return (
    <div>
      <NavBar />
      <div className={styles.Banner}>
        {}
      </div>



      <div className={styles.animesScroll}>
        {loading ?
          <div>
            <div className={styles.animes}>
              {loadArray.map((id) =>
                <img key={id} className={styles.loading} src={load} alt="loading"></img>
              )}
            </div>

          </div> :
          <div className={styles.animes}>
            {animes.map((anime, index) =>
              <Anime
                key={anime.id}
                score={index + 1 + pages}
                id={parseInt(anime.id)}
                year={anime.attributes.createdAt}
                coverImg={anime.attributes.coverImage.original}
                title={anime.attributes.canonicalTitle}
              />
            )}
          </div>
        }
        <img className={`${styles.btn} ${styles.left}`} src={lab} alt="leftArrowBtn" onClick={() => (pages === 0 ? setPages(25) : setPages(pages - 5))} />
        <img className={`${styles.btn} ${styles.right}`} src={rab} alt="rightArrowBtn" onClick={() => (pages === 25 ? setPages(0) : setPages(pages + 5))} />
      </div>
    </div>
  )
}

export default Home;