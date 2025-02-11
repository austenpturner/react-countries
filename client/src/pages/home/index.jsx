import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/maps-key")
      .then((res) => setApiKey(res.data.apiKey))
      .catch((err) => console.error("Error fetching API key:", err));
  }, []);

  useEffect(() => {
    console.log("apiKey");
  }, [apiKey]);

  return (
    <div>
      <h1>Countries Challenge</h1>
    </div>
  );
}
