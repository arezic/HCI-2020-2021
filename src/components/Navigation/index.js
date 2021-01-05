import React from 'react'

import NavigationBar from '../NavigationBar'
import Combobox from '../Combobox'
import styles from './style.module.css'

const Navigation = ({ activeTab }) => (
  <nav className={styles.navigation}>
    <NavigationBar activeTab={activeTab} />
    <Combobox />
  </nav>
)

export default Navigation