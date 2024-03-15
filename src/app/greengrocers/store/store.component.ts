import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiRequestsService } from '../utils/api-requests.service';
import { Item } from 'src/app/models/item';
import { CartService } from '../utils/cart.service';
import { Subscription, tap } from 'rxjs';
import { FilterService } from '../utils/filter.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit, OnDestroy {
  constructor(private apiRequestsService: ApiRequestsService, private filterService: FilterService) { }

  itemSubscription: Subscription = new Subscription;

  items: Item[] = [];
  itemsToDisplay: Item[] = [];

  ngOnInit(): void {
    this.getProducts()

    this.filterService.fruitFilterToggled.pipe(
      tap(() => this.filterItems())
    ).subscribe();
  
    this.filterService.vegetableFilterToggled.pipe(
      tap(() => this.filterItems())
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe()
  }

  getProducts()  {
    this.itemSubscription = this.apiRequestsService.getProducts()
      .subscribe(data => {
        console.log(data);
        this.items = [ ...data ]
        this.filterItems()
    });
  }



  filterItems() {
    this.itemsToDisplay = this.items;

    if (!this.filterService.displayFruit)
      this.itemsToDisplay = this.itemsToDisplay.filter(item => item.type != 'fruit')
    
    if (!this.filterService.displayVegetable)
      this.itemsToDisplay = this.itemsToDisplay.filter(item => item.type != 'vegetable')
  }
}
