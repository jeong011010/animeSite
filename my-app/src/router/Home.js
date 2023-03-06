import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Anime from "../components/Anime";
import styles from "./Home.module.css"
import rab from "../img/rightArrow.png";
import lab from "../img/leftArrow.png";
import load from "../img/loading.gif";
import NavBar from "../components/NavBar";


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

SwiperCore.use([Navigation, Pagination, Autoplay])

function Home() {
  const [loadingTrend, setLoadingTrend] = useState(true);
  const [loadingBanner, setLoadingBanner] = useState(true);
  const [animesTrend, setAnimesTrend] = useState([]);
  const [animesBanner, setAnimesBanner] = useState([]);
  const [pages, setPages] = useState(0);

  const getAnimesTrend = async () => {
    const json = await (await fetch(
      `https://kitsu.io/api/edge/anime?sort=ratingRank&page[limit]=5&page[offset]=${pages}`
    )).json();
    setLoadingTrend(false);
    setAnimesTrend(json.data);
  }
  const getAnimesBanner = async () => {
    const json = await (await fetch(
      `https://kitsu.io/api/edge/trending/anime`
    )).json();
    setAnimesBanner(json.data);
    console.log("!");
    console.log(animesBanner);
    setLoadingBanner(false);
  }

  useEffect(() => {
    getAnimesBanner();
    setLoadingTrend(true);
  }, []);

  useEffect(() => {
    getAnimesTrend();
    setLoadingTrend(true);
  }, [pages]);


  const [animeCnt, setAnimeCnt] = useState(0);

  let loadArray = [1, 2, 3, 4, 5];

  console.log(animesBanner);

  return (
    <div>
      <NavBar />
      {
        loadingBanner ? <div></div> :
          <div>
            <Swiper
              className="banner"
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
            >
              {animesBanner.map((anime, index) =>
                <SwiperSlide key={index} className={styles.animesBanner}>
                  <Link to={`/anime/${anime.id}`}>
                    <img src={anime.attributes.coverImage.original} alt="배너이미지" />
                    <h1>{anime.attributes.canonicalTitle}</h1>
                  </Link>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
      }


      <div className={styles.animesScroll}>
        {loadingTrend ?
          <div>
            <div className={styles.animesTrend}>
              {loadArray.map((id) =>
                <img key={id} className={styles.loadingTrend} src={load} alt="loading"></img>
              )}
            </div>

          </div> :
          <div className={styles.animesTrend}>
            {animesTrend.map((anime, index) =>
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