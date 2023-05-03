import { useEffect, useState } from "react"
import styles from "./AnimeScroll.module.css"
import Anime from "./Anime";

import rab from "../img/rightArrow.png";
import lab from "../img/leftArrow.png";
import load from "../img/loading.gif";

function AnimeScroll({ link, title }) {

  const [loading, setLoading] = useState(true);
  const [animes, setAnimes] = useState([]);
  const [pages, setPages] = useState(0);

  const getAnimes = async () => {
    const json = await (await fetch(
      `${link}&page[limit]=5&page[offset]=${pages}`
    )).json();
    setLoading(false);
    setAnimes(json.data);
    console.log(json);
  }

  useEffect(() => {
    getAnimes();
    setLoading(true);
  }, [pages]);

  let loadArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <h1 className={styles.animeTitle}>{title}</h1>
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
                coverImg={anime.attributes.posterImage.original}
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

export default AnimeScroll;