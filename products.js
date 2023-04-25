/* Consigna

Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. Este debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos (basado en entregable 1).
Aspectos a incluir

La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

Debe guardar objetos con el siguiente formato:
id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
title (nombre del producto)
description (descripción del producto)
price (precio)
thumbnail (ruta de imagen)
code (código identificador)
stock (número de piezas disponibles)

Aspectos a incluir

Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.
Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto

Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.
Formato del entregable

Archivo de javascript con el nombre ProductManager.js


 */


const fs = require("fs");
id = 1;
class ProductManager{
  constructor(path){
    this.path = path;
    this.products = [];
    const productsString =fs.readFileSync(this.path, "utf-8");
    products = JSON.parse(productsString);
    //this.products = products; 
  }
   createProduct(product) {
    this.products.push(product);
    const productsString = JSON.stringify(this.products);
    fs.writeFileSync(this.path, productsString);
  } 
  async addProduct(product){
    try {
      const products = await this.getProducts();
      const newProduct = {...product, id};
      products.push(newProduct);
       fs.writeFile(this.path, JSON.stringify(products, null, 2));
      return newProduct;
    } catch (error) {
      console.error("Error al agregar el producto", error);
    }
  }

  async getProducts() {
    try {
      const productsString = await fs.promises.readFile(this.path, "utf-8");
      return JSON.parse(productsString);
    } catch (error) {
      console.log("Error al leer el archivo", error);
      return [];
    }
  }


   async getProductById(id){
    try {
      const product = this.products.find((p) => p.id === id);
      return product;
    } catch (error) {
      console.log("Error en buscar el producto", error);
    }
    //await fs.promises.writeFile("products", productsString); 
  } 

  async updateProduct(id, newProduct){
    try {
      const index = this.products.findIndex((p) => p.id === id);
      if ( index !== -1){
        products[index] = {...newProduct, id};
        await fs.promises.writeFile(this.path, JSON.stringify(this.products));
        return products[index];
      }else {
        return null;
      }
    } catch (error) {
      console.log("Error al actualizar el producto", error);
    }
   //await fs.promises.writeFile("products", productsString); 
  }

  async deleteProduct(id){
    try {
      const index =  this.products.find((p) => p.id === id);
      if (index !== -1){
        products.splice(index, 1);
        await fs.promises.writeFile(this.path, JSON.stringify(products));
        return true;
      }else {
        return false;
      }
    } catch (error) {
      console.log("Error al eliminar el producto", error);
      return false;
    }
 
  }
}

const products = {
  id: 1,
  title: "producto prueba",
  description : "Este es un producto prueba",
  price : 200,
  thumbnail : "Sin imagen",
  code : "abc123",
  stock: 15
}

const productManager = new ProductManager("products.json");

//console.log(productManager);
//console.log(productManager.getProductById());
//console.log(productManager.addProduct(product));
//console.log(productManager);