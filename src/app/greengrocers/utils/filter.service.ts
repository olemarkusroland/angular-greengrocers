import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  @Output() fruitFilterToggled = new EventEmitter<boolean>();
  @Output() vegetableFilterToggled = new EventEmitter<boolean>();

  displayFruit: boolean = true;
  displayVegetable: boolean = true;

  toggleFruit() {
    this.displayFruit = !this.displayFruit;
    this.fruitFilterToggled.emit(this.displayFruit); 
  }

  toggleVegetable() {
    this.displayVegetable = !this.displayVegetable;
    this.vegetableFilterToggled.emit(this.displayVegetable);
  }
}
