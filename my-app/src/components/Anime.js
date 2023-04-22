import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Anime.module.css"

function Anime({ id, score, coverImg, title, year }) {
  return (

    <div className={styles.anime}>
      <Link to={`/anime/${id}`}>
        <img src={coverImg} alt={title} className={styles.anime__img} /></Link>
      <div className={styles.anime__sub}>
        <h1 className={styles.anime__score}>{score}</h1>
        <h2 className={styles.anime__title}>
          <Link to={`/anime/${id}`}>{title}</Link>
        </h2></div>

    </div >



  )
}

Anime.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Anime;