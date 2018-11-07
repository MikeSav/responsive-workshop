import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productArray: any[] = [
    {productName: 'AirGo SCBA', img: './assets/images/airgo-scba.jpeg'},
    {productName: 'A1 Belt', img: './assets/images/belt1.jpeg'},
    {productName: 'MSA FaceMask', img: './assets/images/facemask1.jpeg'},
    {productName: 'MSA FaceMask A3', img: './assets/images/facemask2.jpeg'},
    {productName: 'MSA FaceMask+', img: './assets/images/facemask1.jpeg'},
    {productName: 'MSA FaceMask+ A3', img: './assets/images/facemask2.jpeg'},
    {productName: 'G1 SCBA', img: './assets/images/g1-scba.jpeg'},
    {productName: 'MSA Helmet 95', img: './assets/images/helmet-mask1.jpeg'},
    {productName: 'MSA Helmet ZX', img: './assets/images/helmet-mask2.jpeg'},
    {productName: 'HP Compress', img: './assets/images/hp-compressor.jpeg'},
    {productName: 'Scout 2000', img: './assets/images/scout1.jpeg'},
    {productName: 'Scout 3000', img: './assets/images/scout2.jpeg'}
  ];
}
