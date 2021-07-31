import styles from '../styles/Sidebar.module.css';
import Events from './Events';
import Stories from './Stories';

function Rightbar() {
    return (
        <div className={styles.right}>
            <Events />
        </div>
    )
}

export default Rightbar;
