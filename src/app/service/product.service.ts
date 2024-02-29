import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!: Array<any>;

  constructor() {
    this.products = [
      {id:1 , name: "Smart Phone" , price: 1600},
      {id:2 , name: "Smart Watch" , price: 1000},
      {id:3 , name: "Computer" , price: 2000}
    ]
   }
   public getAllProducts(){
    return this.products;
   }

}
