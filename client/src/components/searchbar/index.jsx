import { useState } from "react";
import styles from "./searchbar.module.scss";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(searchInput);
  }

  return (
    <form onSubmit={handleSearchSubmit} className={styles.searchBarForm}>
      <input
        type="text"
        placeholder="Search for a country... "
        onChange={handleInputChange}
      />
      <button type="submit" aria-label="search">
        <IoSearchSharp />
      </button>
    </form>
  );
}
