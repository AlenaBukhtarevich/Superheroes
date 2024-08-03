import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

const HeroCard = ({ hero }) => {
  const [rating, setRating] = useState(() => {
    return localStorage.getItem(hero.name) || 0;
  });

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    localStorage.setItem(hero.name, newRating);
  };

  return (
    <div className="hero-card">
      <h2>{hero.name}</h2>
      <img src={hero.url} alt={hero.name} />
      <p>
        <strong>Вселенная:</strong> {hero.universe}
      </p>
      <p>
        <strong>Альтер эго:</strong> {hero.alterego}
      </p>
      <p>
        <strong>Род деятельности:</strong> {hero.occupation}
      </p>
      <p>
        <strong>Друзья:</strong> {hero.friends}
      </p>
      <p>
        <strong>Суперсилы:</strong> {hero.superpowers}
      </p>
      <p>{hero.info}</p>
      <label>
        Оценка:
        <ReactStars
          count={5}
          value={Number(rating)}
          onChange={handleRatingChange}
          size={24}
          activeColor="#ffd700"
        />
      </label>
    </div>
  );
};

export default HeroCard;
