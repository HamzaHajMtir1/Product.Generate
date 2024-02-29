import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  products!: Array<any>;

  constructor(private productService : ProductService)  { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }


  DeleteProducts(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
    }
}
