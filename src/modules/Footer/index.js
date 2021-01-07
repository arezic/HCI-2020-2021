import React from 'react'
  import styles from './style.module.css'
 
  const navTabs = ['About me', 'example@ipsumail.com', '@FESB']
 
  const Footer = () => (
    <footer className={styles.footer}>

        <ul className={styles.navigation}>
            {navTabs.map(tab =>
              <li>{tab}</li>)
            }
        </ul>
    </footer>
  )
 
  export default Footer