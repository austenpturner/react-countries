import PropTypes from "prop-types";
import styles from "./countryCard.module.scss";

export default function CountryCard({ country }) {
  return (
    <div className={styles.card}>
      <img src={country.href.flag} alt={`${country.name}'s flag`} />
      <div className={styles.detailsContainer}>
        <h2>{country.name}</h2>
        <p>
          Population: <span>{country.population}</span>
        </p>
        <p>
          Region: <span>{country.continent}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.object,
};
