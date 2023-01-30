import { Injectable } from '@angular/core';
import { Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  myShoppingCar: Product[] =[]

  constructor() { }
  addProduct(product: Product){
    this.myShoppingCar.push(product)
  }
  getmyShoppingCar(){
    return this.myShoppingCar
  }
  getTotal(){
    return this.myShoppingCar.reduce((sum, item) => sum + item.price, 0)
  }
}
