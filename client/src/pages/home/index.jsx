import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "../../components/searchbar";
import styles from "./home.module.scss";
import RegionSelect from "../../components/regionSelect";
import CountryCard from "../../components/countryCard";

export default function Home() {
  const [apiKey, setApiKey] = useState(null);
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    const url = "https://restfulcountries.com/api/v1/countries?per_page=20";

    axios
      .get(url, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCountries(response.data.data);
      })
      .catch((error) => console.error("Error:", error));
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/maps-key")
      .then((res) => setApiKey(res.data.apiKey))
      .catch((err) => console.error("Error fetching API key:", err));
  }, []);

  useEffect(() => {
    if (apiKey) {
      fetchCountries();
    }
  }, [apiKey]);

  return (
    <div className={styles.homePage}>
      <SearchBar />
      <RegionSelect />
      <div className={styles.cardContainer}>
        {countries?.length ? (
          countries.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })
        ) : (
          <p>Loading ... </p>
        )}
      </div>
    </div>
  );
}
