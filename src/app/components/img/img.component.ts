import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

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

    //================ CICLO DE VIDA DE COMPONENTES ================================================
    constructor(){
      //before render
      //not run async as -- just run one time
      console.log('constructor','imgValue=>',this.imgDefault2)
    }
    ngOnchanges(){
      //before and on during render
      //su funcion es actualizar los inputs de nuestro componente, y se repite many times.
      console.log('ngOnchanges','imgValue=>',this.imgDefault)
    }
    ngOnInit(): void { 
      //run before render
      // in this block of code we can make de async functions or petitions to the backend or API'S, fetch, promise etc.
      //this block run just one time
      console.log('ngOnInit','imgValue=>',this.imgDefault)
    }
    ngAfterViewInit(){
      //run after render 
      //handler children
      console.log('ngAfterViewInit')
    }
    ngOnDestroy(){
      //delete
      console.log('Ondestroy')
    }
    imgError(){
      this.img = this.imgDefault2;
    }
    imgLoaded(){
     console.log(' loaded hijo');
     this.loaded.emit(this.img);
    }
  }

