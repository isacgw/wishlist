import React from 'react'
import styles from '../styles/Header.module.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Isacs önskelista</h1>
        <a href="" download className=''>Ladda ner som Pdf</a>
        <Player
            className={styles.animation}
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_stxjvzmw.json"
            style={{ height: '200px', width: '200px', margin: '40px auto' }}
            >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
    </div>
  )
}

export default Header