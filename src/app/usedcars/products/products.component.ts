import { Component, OnInit } from '@angular/core';
import { ProductOrder } from "../models/product-order.model";
import { Subscription } from "rxjs/internal/Subscription";
import { ProductOrders } from "../models/product-orders.model";
import { Product } from "../models/product.model";
import { UsedCarsServices } from '../services/UsedcarsServices';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public show: boolean = true;
  public vehicle_id: number=null;
  productOrders: ProductOrder[] = [];
  products: Product[] = [];
  selectedProductOrder: ProductOrder;
  private shoppingCartOrders: ProductOrders;
  sub: Subscription;
  productSelected: boolean = false;

  constructor(private usedCarsServices: UsedCarsServices) {
  }

  ngOnInit() {
    this.productOrders = [];
    this.loadProducts();
    this.loadOrders();
  }
  toggle(id) {
    this.show = !this.show;
    this.vehicle_id = id;
  }
  


  addToCart(order: ProductOrder) {
    this.usedCarsServices.SelectedProductOrder = order;
    this.selectedProductOrder = this.usedCarsServices.SelectedProductOrder;
    this.productSelected = true;
  }

  removeFromCart(productOrder: ProductOrder) {
    let index = this.getProductIndex(productOrder.product);
    if (index > -1) {
      this.shoppingCartOrders.productOrders.splice(
        this.getProductIndex(productOrder.product), 1);
    }
    this.usedCarsServices.ProductOrders = this.shoppingCartOrders;
    this.shoppingCartOrders = this.usedCarsServices.ProductOrders;
    this.productSelected = false;
  }

  getProductIndex(product: Product): number {
    return this.usedCarsServices.ProductOrders.productOrders.findIndex(
      value => value.product === product);
  }

  isProductSelected(product: Product): boolean {
    return this.getProductIndex(product) > -1;
  }

  loadProducts() {
    this.usedCarsServices.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
          this.products.forEach(product => {
            this.productOrders.push(new ProductOrder(product, 0));
          })
        },
        (error) => console.log(error)
      );
  }

  loadOrders() {
    this.sub = this.usedCarsServices.OrdersChanged.subscribe(() => {
      this.shoppingCartOrders = this.usedCarsServices.ProductOrders;
    });
  }

  reset() {
    this.productOrders = [];
    this.loadProducts();
    this.usedCarsServices.ProductOrders.productOrders = [];
    this.loadOrders();
    this.productSelected = false;
  }
}
