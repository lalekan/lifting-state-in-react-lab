import Ingredient from './Ingredient';

function IngredientList({ ingredients, addToBurger }) {
  return (
    <div className="ingredient-list-section">
      <h2 className="section-title">Available Ingredients</h2>
      <ul className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            handleClick={() => addToBurger(ingredient)}
            isAddButton={true}
          />
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;
