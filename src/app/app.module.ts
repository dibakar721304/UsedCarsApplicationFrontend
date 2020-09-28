import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { UsedcarsComponent } from './usedcars/usedcars.component';
import { ProductsComponent } from './usedcars/products/products.component';
import { ShoppingCartComponent } from './usedcars/shopping-cart/shopping-cart.component';
import { OrdersComponent } from './usedcars/orders/orders.component';
import { UsedCarsServices } from './usedcars/services/UsedcarsServices';


@NgModule({
  declarations: [
    AppComponent,
    UsedcarsComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsedCarsServices],
  bootstrap: [AppComponent]
})
export class AppModule {
}
