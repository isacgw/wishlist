import React from 'react'
import styles from '../styles/Header.module.css';
// import { Player, Controls } from '@lottiefiles/react-lottie-player';


const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Isacs önskelista</h1>
        <h3>🎅🎄🎁</h3>
        <a href="https://drive.google.com/file/d/1krUl_3sbrkpEGjleqiLYAopl1Lw9tE5O/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            >Pdf version</a>
    </div>
  )
}

export default Header