import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../../utils/mutations';
import { QUERY_RECIPES, QUERY_ME } from '../../utils/queries';

const RecipeForm = () => {
  const [recipeText, setText] = useState("");

  const [addRecipe] = useMutation(ADD_RECIPE, {
    update(cache, { data: { addRecipe } }) {
      try {
        const { recipes } = cache.readQuery({ query: QUERY_RECIPES });
        cache.writeQuery({
          query: QUERY_RECIPES,
          data: { recipes: [addRecipe, ...recipes] }
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, recipes: [...me.recipes, addRecipe] } }
      });
    }
  });

  const handleChange = event => {
    setText(event.target.value);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      await addRecipe({
        variables: { recipeText }
      });

      setText('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
          placeholder="Enter recipe here"
          value={recipeText}
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
