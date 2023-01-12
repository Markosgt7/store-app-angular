import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
  export class ImgComponent implements OnInit{
    @Input() img:string = '';//recibe el valor desde el html del componente padre y cambi su valor
    @Output() loaded = new EventEmitter<string>();
    imgDefault='https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png';
    imgDefault2='https://www.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1732584341.jpg';
    //url avata= https://www.w3schools.com/howto/img_avatar.png
    constructor(){}
    ngOnInit(): void { 
    }
    imgError(){
      this.img = this.imgDefault2;
    }
    imgLoaded(){
     console.log(' loaded hijo');
     this.loaded.emit(this.img);
    }
  }

