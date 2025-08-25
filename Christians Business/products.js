// Fetch product data from products.json
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>R ${product.price}</p>
      `;

      productList.appendChild(productDiv);
    });
  })
  .catch(error => console.error("Error loading products:", error));
