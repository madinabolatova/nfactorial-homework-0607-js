let countOfProducts = () => cosmetics.length;
let canBuyProduct = (product) => cosmetics.includes(product);

export { countOfProducts, canBuyProduct};

export { countOfProducts as cOP, canBuyProduct as cBP };