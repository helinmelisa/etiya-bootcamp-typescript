// Product - Category
// Servisler 
// CRUD operasyonları Create Read Update Delete
// GetAll, GetById, Add, Delete, Update

import { CategoryService } from "./services/categoryService.js"
import { ProductService } from "./services/productService.js"

// Bütün servisleri ve bütün aksiyonlarını main.ts'de test et.
//ürün id, name, price
//category id, name, desc

const categoryService = new CategoryService()
const productService = new ProductService()
categoryService.add({id:1, name: "teknoloji", desc: "elektronik"})
categoryService.add({id:2, name: "mutfak", desc: "eşya"})
const teknoloji = categoryService.getById(1)
const mutfak = categoryService.getById(2)
productService.add({id:1, name:"laptop", price:100, category:teknoloji })
productService.add({id:2, name:"fırın", price:150, category:mutfak})
productService.add({id:3, name:"televizyon", price:200, category:teknoloji})
productService.add({id:5, name:"buzdolabı", price:300, category:mutfak})
console.log(productService.getAll());
categoryService.update(1,{desc:"teknolojik ürünler"})
productService.update(2,{name:"fırın+", price:800});
console.log("**********");
console.log(productService.getAll());
console.log("**********");
productService.delete(5)
console.log(productService.getAll());