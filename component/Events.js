import styles from '../styles/Story.module.css';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {MdEventAvailable} from 'react-icons/md';
import {AiOutlineGift} from 'react-icons/ai';


function Events() {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
            <p>
            <strong>Events</strong>
            </p>
            <BiDotsHorizontalRounded />
          </div>
          <div className={styles.eventBody}>
             <div>
               <MdEventAvailable className={styles.icon}/>
               <p>10 Events invites</p>
             </div>
              <div>
               <AiOutlineGift className={styles.icon}/>
               <p>Prads's invites birthday</p>
             </div>
          </div>
        </div>
    )
}

export default Events;
