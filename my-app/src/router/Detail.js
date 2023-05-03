import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import noImg from "../img/noImg.png";
import styles from "./Detail.module.css";
import YouTube from 'react-youtube';

import NavBar from "../components/NavBar";

function Detail() {


  const { id } = useParams();
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAnime = async () => {
    const json = await (await fetch(
      `https://kitsu.io/api/edge/anime/${id}`
    )).json();

    setAnime(json.data.attributes);
    setLoading(false);
    console.log(json);
  }

  useEffect(() => {
    getAnime();
  }, []);

  console.log(anime.canonicalTitle)

  return (
    <div>
      <NavBar />
      {
        loading ? <div></div> :
          <div className={styles.coverImg}>
            {
              anime.coverImage === null ? <img className={styles.noImg} src={noImg} alt="이미지 없음" />
                : <img className={styles.Img} src={anime.coverImage.original} alt="배너 이미지" />
            }
          </div>
      }
      <div className={styles.center}>
        <div className={styles.youtube}>
          <div className={styles.youtubeBox}>
            {
              anime.youtubeVideoId === null ? <img className={styles.noImg} src={noImg} alt="영상 없음" /> :
                <YouTube className={styles.Video}
                  //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                  videoId={anime.youtubeVideoId}
                  //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                  //밑에서 더 설명하겠습니다.
                  opts={{
                    width: "800",
                    height: "450",
                    playerVars: {
                      autoplay: 0, //자동재생 O
                      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                    },
                  }}
                  //이벤트 리스너 
                  onEnd={(e) => { e.target.stopVideo(0); }}
                />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail;