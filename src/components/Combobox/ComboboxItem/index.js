import React from 'react'
 
import styles from './style.module.css'
 
const ComboboxItem = ({text}) => (
    <div className={styles.comboboxItem}>
        <span>{text}</span>
    </div>
)
 
export default ComboboxItem