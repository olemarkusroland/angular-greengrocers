import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from '../api-requests.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  constructor(private apiRequestsService: ApiRequestsService) { }

  items: Item[] = [];

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts()  {
    this.apiRequestsService.getProducts()
      .subscribe(data => {
        console.log(data);
        this.items = [ ...data ]
      });
  }
}
