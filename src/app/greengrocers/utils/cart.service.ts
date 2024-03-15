import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];

  Add(item: Item) {
    const ItemIndex = this.items.findIndex(i => i.id === item.id)

    if (ItemIndex === -1) {
      this.items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        type: item.type,
        quantity: 1,
      });
    }
    else {
      this.items[ItemIndex].quantity++
    }
  }

  Remove(item: Item) {
    const itemIndex = this.items.findIndex(i => i.id === item.id);
  
    if (itemIndex === -1) {
      throw new Error("Attempting to remove item that is not in cart");
    }
  
    if (this.items[itemIndex].quantity <= 1) {
      this.items.splice(itemIndex, 1); 
    } else {
      this.items[itemIndex].quantity--;
    }
  }
}
