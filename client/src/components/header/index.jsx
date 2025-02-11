import styles from "./header.module.scss";
import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <div className={styles.modeToggleContainer}>
        <IoMoonOutline />
        <p>Dark Mode</p>
      </div>
    </header>
  );
}
