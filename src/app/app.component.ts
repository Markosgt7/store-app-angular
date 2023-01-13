import { Component } from '@angular/core';
import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    showImage=true;
  
  imgParent = '';
  imgLoaded(img:string){
    console.log('loaded padre', img);
  }
  toggleImg(){
    this.showImage = !this.showImage;
  }
}
