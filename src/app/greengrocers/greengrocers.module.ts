import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { TotalComponent } from './total/total.component';
import { ItemComponent } from './store/item/item.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CartComponent,
    StoreComponent,
    TotalComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    StoreComponent,
    CartComponent,
    TotalComponent
  ]
})
export class GreengrocersModule { }
