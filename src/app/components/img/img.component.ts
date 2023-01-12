import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
  export class ImgComponent implements OnInit{
    @Input() img:string = 'valor inicial';//recibe el valor desde el html del componente padre y cambi su valor
    
    constructor(){}
    ngOnInit(): void {
      
    }
  }

