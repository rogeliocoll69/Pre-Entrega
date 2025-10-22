const args = process.argv.slice(2);
const command = args[0];
const resource = args[1];

// Debug
console.log("process.argv:", process.argv);
console.log("args:", args);
console.log("command:", command);
console.log("resource:", resource);
if (command === "GET" && resource === "products") {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log("Lista completa:", data))
    .catch(err => console.error("Error al obtener productos:", err));
} 

else if (command === "GET" && resource.startsWith("products/")) {
  const productId = resource.split("/")[1];
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(data => console.log("Producto individual:", data))
    .catch(err => console.error("Error al obtener producto:", err));
} if (command === "POST" && resource === "products") {
  const title = args[2];      // "T-Shirt-Rex"
  const price = parseFloat(args[3]); // 300
  const category = args[4];   // "remeras"

  // Construir el body del producto
  const newProduct = {
    title,
    price,
    category
  };

  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(data => console.log("Producto creado:", data))
    .catch(err => console.error("Error en POST:", err));
}
else if (command === "DELETE" && resource.startsWith("products/")) {
  const productId = resource.split("/")[1]; // obtiene el número después de "products/"
  
  fetch(`https://fakestoreapi.com/products/${productId}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(data => console.log("Producto eliminado:", data))
    .catch(err => console.error("Error al eliminar el producto:", err));
}

