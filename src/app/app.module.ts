import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreengrocersModule } from './greengrocers/greengrocers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GreengrocersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
