import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import styles from "./Home.module.css"
import NavBar from "../components/NavBar";
import AnimeScroll from "../components/AnimeScroll"


import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";	// 추가
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'


SwiperCore.use([Navigation, Pagination, Autoplay])

function Home() {
  const [loadingBanner, setLoadingBanner] = useState(true);
  const [animesBanner, setAnimesBanner] = useState([]);

  useEffect(() => {
    const getAnimesBanner = async () => {
      const json = await (await fetch(
        `https://kitsu.io/api/edge/trending/anime`
      )).json();
      setAnimesBanner(json.data);
      console.log("!");
      console.log(animesBanner);
      setLoadingBanner(false);
    }
    getAnimesBanner();
  }, [animesBanner]);

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


      <AnimeScroll
        link="https://kitsu.io/api/edge/anime?sort=ratingRank"
        title="인기 애니"
      />

      <AnimeScroll
        link="https://kitsu.io/api/edge/anime?filter[categories]=adventure"
        title="모험의 세계로!"
      />
    </div>
  )
}

export default Home;