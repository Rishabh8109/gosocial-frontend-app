import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

function ListItem({icon , text , to}) {
    return (
        <>
        <li>
           {icon}
          <Link href={`${to}`}>{text}</Link>
        </li>   
        </>
    )
}

export default ListItem;
