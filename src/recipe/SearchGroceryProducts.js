import React, { useState, useEffect } from "react";

export function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: "500px",
        backgroundColor: "green"
      }}
    >
      {children}
    </div>
  );
}

function SearchGroceryProducts() {
  const [recipes, setRecipes] = useState([]);
  let [recipeImage, setRecipeImage] = useState(null);

  const API_KEY = "4bba5557c5eb46e085fdd5363c8a47f1";

  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&?query=pasta&maxFat=25&number=2`;
  function getRecipe() {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      // Setting recipeImage to the image url that we received from the response above
      .then((data) => setRecipeImage(data.results[0].image));
  }, []);

  return (
    <Container>
      <div className="products">
        <section className="controls">
          <button onClick={getRecipe}>Get recipe</button>
          <h1> {JSON.stringify(recipes.results)}</h1>
          <img src={recipeImage} />
        </section>
      </div>
    </Container>
  );
}

export default SearchGroceryProducts;
