fetch('get_products.php')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(product => {
      output += `
        <div class="product">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
    });
    document.getElementById('products').innerHTML = output;
  });

function addToCart(id) {
  fetch('add_to_cart.php?id=' + id)
    .then(() => alert("Added to cart"));
}