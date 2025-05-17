import React from 'react';

const TipCard = ({ title, body }) => {
  return (
    <div className="tip-card">
      <div className="tip-card-header">
        <h4>{title}</h4>
      </div>
      <div className="tip-card-body">
        <p>{body}</p>
      </div>
    </div>
  );
};

export default TipCard;
