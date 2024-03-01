import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../modele/products.modele';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products!: Array<Product>;

  constructor() {
    this.products = [
      {id:1 , name: "Smart Phone" , price: 1600},
      {id:2 , name: "Smart Watch" , price: 1000},
      {id:3 , name: "Computer" , price: 2000}
    ]
   }
   public getAllProducts() : Observable<Array<Product>> {
    return of(this.products);
   }

   public DeleteProduct(id:number) : Observable<boolean>{
    this.products = this.products.filter(p=>p.id!==id);
    return of(true);
   }
}
