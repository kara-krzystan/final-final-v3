import React from 'react';

const SingleRecipe = props => {
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            Username
          </span>{' '}
        </p>
        <div className="card-body">
          <p>Recipe Text</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
