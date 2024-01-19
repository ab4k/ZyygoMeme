import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import PlaceholderPara from "../placeholderPara/PlaceholderPara";

const MemeCard = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const generateRandomJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.api-ninjas.com/v1/jokes", {
        headers: {
          "X-Api-Key": "jSD+tp99SKPs8+Ix+qmWrw==cpP7CBFpWSm0L0BF",
        },
      });

      const randomJoke =
        response.data && response.data.length > 0
          ? response.data[Math.floor(Math.random() * response.data.length)]
          : null;
      setJoke(randomJoke ? randomJoke.joke : "No Jokes Found!");
    } catch (error) {
      console.error("Error fetching random joke:", error.message);
      setJoke("Error fetching joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="card">
          <div className="joke-wrapper">
            {loading ? (
              <PlaceholderPara />
            ) : (
              <div className="joke-container">
                <p>{joke}</p>
              </div>
            )}
            <button onClick={generateRandomJoke} className="generate-button">
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemeCard;
