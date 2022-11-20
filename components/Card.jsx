import React from 'react'
import styles from '../styles/Card.module.css';

const Card = ({title, image, url, id}) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.imageContainer}>
      <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <a href={url} target="_blank" rel="noreferrer">Till produkten</a>
      </div>
    </div>
  )
}

export default Card