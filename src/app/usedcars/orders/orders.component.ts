import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/internal/Subscription";
import { ProductOrders } from '../models/product-orders.model';
import { UsedCarsServices } from '../services/UsedcarsServices';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: ProductOrders;
  total: number;
  paid: boolean;
  sub: Subscription;

  constructor(private usedCarsServices: UsedCarsServices) {
    this.orders = this.usedCarsServices.ProductOrders;
  }

  ngOnInit() {
    this.paid = false;
    this.sub = this.usedCarsServices.OrdersChanged.subscribe(() => {
      this.orders = this.usedCarsServices.ProductOrders;
    });
    this.loadTotal();
  }

  pay() {
    this.paid = true;
   // this.usedCarsServices.saveOrder(this.orders).subscribe();
  }

  loadTotal() {
    this.sub = this.usedCarsServices.TotalChanged.subscribe(() => {
      this.total = this.usedCarsServices.Total;
    });
  }
}
