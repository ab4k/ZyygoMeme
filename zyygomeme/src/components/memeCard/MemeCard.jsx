import React, { useState } from "react";
import axios from "axios";
import "./style.css";
const MemeCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [memeUrl, setMemeUrl] = useState("");

  const generateRandomMeme = async () => {
    try {
      const response = await axios.get("/api/random-meme");
      setMemeUrl(response.data.meme);
    } catch (error) {
      console.error("Error fetching meme:", error.message);
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="meme-genres">
            <label htmlFor="genres">Select your meme category</label>
            <select
              name="genres"
              id="genres"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="clean">Clean</option>
              <option value="animal">Animal</option>
              <option value="fruit">Fruit</option>
              <option value="sport">Sport</option>
              <option value="nerdy">Nerdy</option>
              <option value="deep_thoughts">Deep Thoughts</option>
              <option value="relationship">Relationship</option>
            </select>
          </div>
          <div className="meme-wrapper">
            <div className="meme-container">
              {memeUrl && <img src={memeUrl} alt="Random Meme" />}
            </div>
            <button onClick={generateRandomMeme} className="generate-button">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemeCard;
