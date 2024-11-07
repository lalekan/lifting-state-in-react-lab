
const BurgerStack = ({ingredients}) => {

    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     props.addIngredient(burgerStack);
        
    // }

    console.log(ingredients, 'INGREDIENTS IN BURGER STACK')

    return(
        <div>
            <h2>Burger Stacker</h2>
            {ingredients.map((ingredient, index) => {
                <ul key={index}>{ingredient.name} with the color {ingredient.color}</ul>
            })}
        </div>
        
    )
}

 export default BurgerStack