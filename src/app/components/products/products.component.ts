import { Component } from '@angular/core';
import { Product} from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  myShoppingCar: Product[] =[]
  total = 0
  products: Product[] =[];
  //se usa el pipe Date para formatear en tipo fecha.
  today = new Date();
  date = new Date(2021,1,21);
  constructor(
    private storeService: StoreService,// se inyecta el servicio para agregar logica
    private productsService: ProductsService
  ){
    this.myShoppingCar = this.storeService.getmyShoppingCar()
  }

  ngOnInit(): void{
    this.productsService.getAllProducts()
    .subscribe(data =>{
      this.products = data;
    })
  }
  onAddToShoppingCart(product: Product){
   this.storeService.addProduct(product)
   this.total = this.storeService.getTotal()
  }

}
