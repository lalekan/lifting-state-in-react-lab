
function Ingredient({ ingredient, handleClick, isAddButton }) {
  return (
    <li
      className="ingredient-item"
      style={{ backgroundColor: ingredient.color }}
    >
      <span className="ingredient-text">{ingredient.name}</span>
      <button
        className={isAddButton ? 'add-btn' : 'remove-btn'}
        onClick={handleClick}
      >
        {isAddButton ? '+' : 'X'}
      </button>
    </li>
  );
}

export default Ingredient;
