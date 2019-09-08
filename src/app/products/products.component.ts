import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  className = 'about-background';
  heroTitle = 'E-comm Services';
  subTitle = 'Services we provide';
  imgUrl: string;

  heading = 'Products We Offer';

  msg = 'Our Team';
  img = 'https://images.pexels.com/photos/1114610/pexels-photo-1114610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  url = 'about';

  constructor() { }

  ngOnInit() {
    this.imgUrl = '/assets/about.png';
  }

}
