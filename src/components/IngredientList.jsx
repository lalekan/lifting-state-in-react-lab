
const IngredientList = ({ingredients}) => {
    
    console.log(ingredients, 'INGREDIENTS IN INGREDIENTS LIST')

    return (
        <div>
            This is the ingredients list!
            <ul>
            {ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient.name}</li>
            })}
            </ul>    
        </div>
         
    );
};
export default IngredientList
