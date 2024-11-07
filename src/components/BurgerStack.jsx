import Ingredient from './Ingredient';

function BurgerStack({ stack, removeFromBurger }) {
  return (
    <div className="burger-stack-section">
      <h2 className="section-title">Your Burger Stack</h2>
      <ul className="burger-stack">
        {stack.length === 0 ? (
          <p className="empty-message">No Ingredients</p>
        ) : (
          stack.map((ingredient, index) => (
            <Ingredient
              key={index}
              ingredient={ingredient}
              handleClick={() => removeFromBurger(index)}
              isAddButton={false}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default BurgerStack;
