import React from 'react'
 
import ComboboxItem from './ComboboxItem'
import styles from './style.module.css' 

const profileItems = ['Login','Favourites']
 
const Combobox = () => (
    <div className={styles.combobox}>
        {<ul>
          {profileItems.map(el => 
            <ComboboxItem text={el}/>)}
        </ul>
        }
    </div>
)
 
export default Combobox