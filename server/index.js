const express = require("express");
const dotenv = require("dotenv").config();
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api.humorapi.com/memes/random", async (req, res) => {
  try {
    const response = await axios.get(
      `/api.humorapi.com/memes/random?keywords=${selectedCategory}`,
      {
        headers: {
          "X-API-Key": process.env.MEME_API_KEY,
        },
      }
    );

    const memeUrl = response.data.url;
    res.json({ meme: memeUrl });
  } catch (error) {
    console.error("Error fetching meme:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
