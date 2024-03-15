import { Component } from '@angular/core';
import { FilterService } from '../utils/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  constructor(private filterService: FilterService) {}

  get displayFruit() {
    return this.filterService.displayFruit;
  }

  get displayVegetable() {
    return this.filterService.displayVegetable;
  }

  toggleFruit() {
    this.filterService.toggleFruit();
  }

  toggleVegetable() {
    this.filterService.toggleVegetable();
  }
}
