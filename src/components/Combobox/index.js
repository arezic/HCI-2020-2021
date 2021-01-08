import React, {useState} from 'react'
 
import ComboboxItem from './ComboboxItem'
import styles from './style.module.css' 

const profileItems = ['Log in / Sign up','Favourites']
 
const Combobox = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className={styles.combobox} onClick={() => setOpen(!open) }>
            {open &&
            <ul>
                {profileItems.map(el => 
                <ComboboxItem text = {el} />)}
            </ul>
        }
        </div>
    )
}
 
export default Combobox