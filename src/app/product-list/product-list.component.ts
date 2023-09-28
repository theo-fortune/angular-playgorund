import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // name = 'John Smith';
  addToCart: Number = 0;
  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Red',
    discount: 8.5,
    inStock: 7,
    prodImg: 'assets/images/iphone.png',
  };
  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }
  ifInStock() {
    return this.product.inStock > 0
      ? 'Only ' + this.product.inStock + ' items left'
      : 'Out of stock 😔';
  }
  // onChange(event: any) {
  //   this.name = event.target.value;
  // }
}
