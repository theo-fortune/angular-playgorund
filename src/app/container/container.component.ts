import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent {
  // // name = 'John Smith';
  // addToCart: number = 0;
  // product = {
  //   name: 'iPhone X',
  //   price: 789,
  //   color: 'Red',
  //   discount: 8.5,
  //   inStock: 7,
  //   prodImg: 'assets/images/iphone.png',
  // };
  // getDiscountedPrice() {
  //   return (
  //     this.product.price - (this.product.price * this.product.discount) / 100
  //   );
  // }
  // ifInStock() {
  //   return this.product.inStock > 0
  //     ? 'Only ' + this.product.inStock + ' items left'
  //     : 'Out of stock 😔';
  // }
  // // onChange(event: any) {
  // //   this.name = event.target.value;
  // // }
  // incrementCartValue() {
  //   if (this.addToCart < this.product.inStock) this.addToCart++;
  // }
  // decrementCartValue() {
  //   if (this.addToCart > 0) this.addToCart--;
  // }
  // disableIfZero() {
  //   if (this.addToCart = 0) {

  //   }
  // }
  listOfString: string[] = ['Mark', 'Steve', 'Mary', 'John', 'Sarah'];
}