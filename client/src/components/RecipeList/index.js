import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes, title }) => {

  return (
    <div>
      <h3>{title}</h3>
      {recipes &&
        recipes.map(recipe => (
          <div key={recipe._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${recipe.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {recipe.username}
              </Link>{' '}
            </p>
            <div className="card-body">
              <Link to={`/recipe/${recipe._id}`}>
                <p>{recipe.recipeText}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
