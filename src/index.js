/* Se creará una instancia de la clase “ProductManager”
Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25
El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo */

class ProductManager {
  id = 1;
  constructor() {
    this.products = [];
    
  }

  getProducts() {
    return this.products;
  }

  addProduct(product){
    let findOutCode = this.products.find((p) => p.code === product.code);
    if(findOutCode) {
      //throw new Error("Ya existe un producto con el mismo código.");
      return "Ya existe un producto con el mismo código.";
    }
    if (product.title &&
    product.description &&
    product.price &&
    product.thumbnail &&
    product.code &&
    product.stock) {
  
} else {
  // throw new Error('Fields missing');
  return 'Fields missing';
 /*  if (
    !product.title ||!product.description ||!product.price ||!product.thumbnail ||!product.code ||!product.stock
  ) {
    // throw new Error('Fields missing');
    return 'Fields missing';
  } */
    }
    let newProduct = {...product, id: this.id };
      this.products.push(newProduct);
      this.id++;
      return "Product agregado";
  }

   getProductById(id){
    let located = this.products.find((p) => p.id === id);
    if (!located){
      //throw new Error("Producto no encontrado")
      return "Producto no encontrado"
    }
    return located;
  } 
}

const product = {
    title : "Zapatillas",
    description: "Adidas Terrex",
    price : 18631,
    thumbnail: "https://www.tradeinn.com/f/13810/138103840/adidas-zapatillas-terrex-ax4-goretex.jpg",
    code : "abc123",
    stock : 15
};
//console.log(product);

  const productManager = new ProductManager();

 
//console.log(productManager.getProducts());
//console.log(productManager.getProductById());
//console.log(productManager.addProduct(product));
//console.log(productManager);