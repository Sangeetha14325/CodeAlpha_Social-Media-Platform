import React from 'react';
import './SocialCard.css';

function SocialCard({ platform, followers, growth }) {
  return (
    <div className={`social-card ${platform.toLowerCase()}`}>
      <h2>{platform}</h2>
      <p>Followers: {followers}</p>
      <p>Growth: {growth}</p>
    </div>
  );
}

export default SocialCard;
