const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/random-joke", async (req, res) => {
  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/jokes");

    const randomJoke =
      response.data && response.data.length > 0
        ? response.data[Math.floor(Math.random() * response.data.length)]
        : null;

    res.json(randomJoke);
  } catch (error) {
    console.error("Error fetching random meme:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
