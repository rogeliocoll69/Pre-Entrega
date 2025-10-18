//SE PUEDE USAR ASYNC Y AWAIT??
/* //hay q usar solo fecht
async function ListaCompleta() {
  try {
    // 1. Esperar a la respuesta del fetch
    const response = await fetch('https://fakestoreapi.com/products');
    
    // 2. Convertir la respuesta en JSON
    const data = await response.json();
    
    // 3. Tomar los primeros 5
    const primeros5 = data.results.slice(0, 5);
    
    // 4. Extraer solo nombre y raza
    const nombresYRazas = primeros5.map((personaje) => ({
      nombre: personaje.name,
      raza: personaje.species
    }));
    
    // 5. Mostrar en consola
    console.log("Primeros 5 personajes (nombre y raza):", nombresYRazas);
    
  } catch (error) {
    // Manejo de errores
    console.error("Hubo un error al traer los datos:", error);
  } finally {
    // Siempre se ejecuta
    console.log("La petición terminó (con o sin éxito).");
  }
}

// Ejecutar la función
obtenerPersonajes(); */
const args = process.argv.slice(2);
const command = args[0];
const resource = args[1];

// Debug
console.log("process.argv:", process.argv);
console.log("args:", args);
console.log("command:", command);
console.log("resource:", resource);
if (command === "GET" && " producs") {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
} 
else if (command === "GET" && resource && resource.startsWith("products/")) {
  const productId = resource.split("/")[1];
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(data => console.log("Producto:", data))
    .catch(err => console.error("Error al obtener producto:", err));
} else {
  console.log("Comando no reconocido o argumento faltante");
}
if (command === "POST" && resource === "products") {
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



//ME FALTO EL PASO 1 MAÑANA LO TERMINO, lo borre