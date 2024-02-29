import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products!: Array<any>;

  constructor()  { }

  ngOnInit(): void {
    this.products = [
      {id:1 , name: "Smart Phone" , price: 1600},
      {id:2 , name: "Smart Watch" , price: 1000},
      {id:3 , name: "Computer" , price: 2000}
    ]
  }

}
