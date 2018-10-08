import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/landing/models/product.model';
import { products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor() { }

  ngOnInit() {
    this.products = products;
  }

}
