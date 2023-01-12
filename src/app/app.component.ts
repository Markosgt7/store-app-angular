import { Component } from '@angular/core';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[] =[
    {
      id:'1',
      name:'New Toy',
      price: 550,
      image:'https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png'
    },
    {
      id:'2',
      name:'New Tools',
      price: 850,
      image:'https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png'
    },
    {
      id:'3',
      name:'New Car',
      price: 650,
      image:'https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png'
    },
    {
      id:'4',
      name:'New Phone',
      price: 750,
      image:'https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png'
    },
    {
      id:'5',
      name:'New doll',
      price: 550,
      image:'https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png'
    },
    {
      id:'6',
      name:'New Kit',
      price: 250,
      image:'https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png'
    },
  ]
  imgParent = '';
  imgLoaded(img:string){
    console.log('loaded padre', img);
  }
}
