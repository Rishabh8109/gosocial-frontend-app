import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/" className={styles.navbrand}>
          gosocial
        </Link>
        <div className={styles.searchBox}>
          <input type="text" placeholder="search" />
          <FiSearch className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.icons}>
        <FiSearch className={styles.SearchIcon}/>
        <AiOutlineUserAdd className={styles.userAddIcon}/>
      </div>
    </header>
  );
}

export default Header;
