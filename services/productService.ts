import { Product } from "../models/product";

export class ProductService{
    private products: Product[] = [];

    add(product: Product){
        this.products.push(product);
    }

    getAll():Product[]{
        return this.products;
    }

    getById(id: number):Product|undefined{
        return this.products.find(product => product.id === id);
    }

    delete(id: number) {
        this.products = this.products.filter(product => product.id != id); 
    }

    update(id: number, payload: object) {
        const index = this.products.findIndex(product => product.id == id);
        const updatedItem = {...this.products[index], ...payload}
        this.products.splice(index, 1, updatedItem)
     }
}