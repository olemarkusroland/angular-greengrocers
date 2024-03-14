import { Component } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../utils/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cart: CartItem[] = [];

  constructor(public cartService: CartService) {
    this.cart = this.cartService.items;
  }
}
