import { Component } from '@angular/core';
import { CartService } from '../utils/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  cart: CartItem[] = []
  constructor (private cartService: CartService) {
    this.cart = cartService.items;
  }
  
  total(): number {
    return this.cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  }
}
