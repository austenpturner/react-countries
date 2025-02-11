import { useEffect, useState } from "react";

export default function RegionSelect() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const options = [
    {
      id: 1,
      name: "Africa",
      value: "africa",
    },
    {
      id: 2,
      name: "Americas",
      value: "americas",
    },
    {
      id: 3,
      name: "Asia",
      value: "asia",
    },
    {
      id: 4,
      name: "Europe",
      value: "europe",
    },
    {
      id: 5,
      name: "Oceania",
      value: "oceania",
    },
  ];

  function handleRegionSubmit(e) {
    e.preventDefault();
    setSelectedRegion(e.target.value);
  }

  useEffect(() => {
    console.log(selectedRegion);
  }, [selectedRegion]);

  return (
    <select name="regionSelect" id="region" onChange={handleRegionSubmit}>
      <option>Filter by Region</option>
      {options?.length
        ? options.map((optionItem, index) => {
            return (
              <option key={index} value={optionItem.value}>
                {optionItem.name}
              </option>
            );
          })
        : null}
    </select>
  );
}
