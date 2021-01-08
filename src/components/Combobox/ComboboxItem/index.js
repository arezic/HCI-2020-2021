import React from 'react'
 
import styles from './style.module.css'
 
const ComboboxItem = ({text}) => (
    <li className={styles.comboboxItem}>
        <span>{text}</span>
    </li>
)
 
export default ComboboxItem