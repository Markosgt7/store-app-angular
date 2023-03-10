import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCar: Product[] =[]
  private myCart = new BehaviorSubject<Product[]>([])
  myCart$ = this.myCart.asObservable()
 
  addProduct(product: Product){
    this.myShoppingCar.push(product)
    this.myCart.next(this.myShoppingCar)
  }
  getmyShoppingCar(){
    return this.myShoppingCar
  }
  getTotal(){
    return this.myShoppingCar.reduce((sum, item) => sum + item.price, 0)
  }
}
