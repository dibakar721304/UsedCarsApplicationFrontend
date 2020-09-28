export class Product {
  _id: number;
  make: string;
  model: string;
  price: number;
  year_model: number;
  date_added: string;
  warehouse_name: string;
  warehouse_longitude: string;
  warehouse_latitude:string

  constructor(_id: number, make: string, model: string, price: number, year_model: number, date_added:string, warehouse_name: string, warehouse_longitude: string, warehouse_latitude:string) {
    this._id = _id;
    this.make = make;
    this.price = price;
    this.year_model = year_model;
    this.date_added = date_added;
    this.warehouse_name = warehouse_name;
    this.warehouse_longitude = warehouse_longitude;
    this.warehouse_latitude = warehouse_latitude
  }
}
