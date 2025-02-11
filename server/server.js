import dotenv from "dotenv";
import express from "express";
import cors from "cors";

// ✅ Fix: Manually load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Debugging: Check if your environment variable is loaded
// console.log("countries api key:", process.env.RESTFUL_COUNTRIES_API_KEY);

app.use(cors());

app.get("/api/maps-key", (req, res) => {
  if (!process.env.RESTFUL_COUNTRIES_API_KEY) {
    return res.status(500).json({ error: "API Key not found" });
  }
  res.json({ apiKey: process.env.RESTFUL_COUNTRIES_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
