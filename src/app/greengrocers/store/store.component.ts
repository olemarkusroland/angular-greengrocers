import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiRequestsService } from '../utils/api-requests.service';
import { Item } from 'src/app/models/item';
import { CartService } from '../utils/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit, OnDestroy {
  constructor(private apiRequestsService: ApiRequestsService) { }
  itemSubscription: Subscription = new Subscription;

  items: Item[] = [];

  ngOnInit(): void {
    this.getProducts()
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe()
  }

  getProducts()  {
    this.itemSubscription = this.apiRequestsService.getProducts()
      .subscribe(data => {
        console.log(data);
        this.items = [ ...data ]
    });
  }
}
