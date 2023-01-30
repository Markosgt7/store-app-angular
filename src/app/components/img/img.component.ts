import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
  export class ImgComponent implements OnInit{
    //haciendo uso de SetInput
    img:string = '';

    @Input('img')
      set changeImg(newImg: string){
        this.img = newImg;
        console.log('change just image =>', this.img);
      } 
    @Input() alt:string = '';
    @Output() loaded = new EventEmitter<string>();
    counter = 0;
    counterFn: number | undefined;
    imgDefault='https://andeguat.org.gt/wp-content/uploads/2015/02/default-placeholder.png';
    imgDefault2='https://www.shutterstock.com/image-vector/picture-vector-icon-no-image-600w-1732584341.jpg';
    //url avata= https://www.w3schools.com/howto/img_avatar.png

    //================ CICLO DE VIDA DE COMPONENTES ================================================
    constructor(){
      //before render
      //not run async as -- just run one time
      //console.log('constructor','imgValue=>',this.img)
    }
    ngOnchanges(changes: SimpleChange){
      //before and on during render
      //su funcion es actualizar los inputs de nuestro componente, y se repite many times.
      //console.log('ngOnchanges imgValue=>',this.img);
      //console.log('changes=>',changes);

    }
    ngOnInit(): void { 
      //run before render
      // in this block of code we can make de async functions or petitions to the backend or API'S, fetch, promise etc.
      //this block run just one time
      /* console.log('ngOnInit','imgValue=>',this.img)
      this.counterFn = window.setInterval(()=>{
        this.counter +=1;
        console.log('run counter');
      },1000); */
    }
    ngAfterViewInit(){
      //run after render 
      //handler children
      //console.log('ngAfterViewInit')
    }
    ngOnDestroy(){
      //delete
      console.log('Ondestroy');
      /* window.clearInterval(this.counterFn); */
    }
    imgError(){
      this.img = this.imgDefault2;
    }
    imgLoaded(){
    // console.log(' loaded hijo');
     this.loaded.emit(this.img);
    }
  }

