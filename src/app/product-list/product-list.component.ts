import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  cartCount: number = 0;
  product = {
    name: '',
    cost: 0.0,
    color: '',
    discountPrice: 0.0,
    inStock: 0,
    pImage: ''
  }

  constructor(){
    this.firstProductDetails();
  }

  getDiscountedPrice(){
    return (this.product.cost - (this.product.cost * this.product.discountPrice / 100)).toFixed(2) ;
  }

  firstProductDetails(){
    this.product.name = 'iPhone';
    this.product.cost = 999.99;
    this.product.color = 'Matt Black';
    this.product.discountPrice = 8.5,
    this.product.inStock = 6,
    this.product.pImage = 'assets/images/download.jpg'
  }

  decrementCartCount(){
    if(this.cartCount > 0){
      this.cartCount--;
    }
  }

  incrementCartCount(){
    if(this.cartCount < this.product.inStock){
      this.cartCount++;
    }
  }
}

