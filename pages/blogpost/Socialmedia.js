import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/styles/Home.module.css'
const Socialmedia = () => {
  return (
    <div className={styles.Socialmedia}>
        <ul>
      <li><InstagramIcon/></li>
      <li><FacebookIcon/></li>
      <li><EmailIcon/></li>
      </ul>
    </div>
  )
}

export default Socialmedia
