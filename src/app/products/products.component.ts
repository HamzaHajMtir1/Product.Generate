import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../modele/products.modele';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  products!: Array<Product>;
  ErrorMessage!: string;

  constructor(private productService : ProductService)  { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProducts().subscribe({
      next: (data : Product[]) => {
        this.products = data;
      },
      error: (err) => {
        this.ErrorMessage = err;
      }

    });
  }


  DeleteProducts(p: any) {
    this.productService.DeleteProduct(p.id).subscribe({
      next: (data : boolean) => {
        let index = this.products.indexOf(p);
        this.products.splice(index, 1);
      },
    })
    }
}
