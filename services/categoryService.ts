import { Category } from "../models/category";

export class CategoryService{
    private categories: Category[] = [];

    add(category: Category){
        this.categories.push(category);
    }

    getAll():Category[]{
        return this.categories;
    }

    getById(id: number):Category|undefined{
        return this.categories.find(category => category.id === id);
    }

    delete(id: number) {
        this.categories = this.categories.filter(category => category.id != id); 
    }

    update(id: number, payload: object) {
        const index = this.categories.findIndex(category => category.id == id);
        const updatedItem = {...this.categories[index], ...payload}
        this.categories.splice(index, 1, updatedItem)
     }
}