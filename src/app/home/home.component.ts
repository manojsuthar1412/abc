import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { Items } from '../items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  about = 'About Us';
  products = 'Products We Offer';
  team = 'Our Team';
  img = "https://images.pexels.com/photos/2522669/pexels-photo-2522669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  url = 'about';


  className = 'hero-background';
  imgUrl: string;
  heroTitle = 'E-comm';
  subTitle = 'Online Shopping Website';

  Items: Products[] = [];

  constructor() { }

  ngOnInit() {
    this.imgUrl = 'assets/bg.png';
    Items.map(item => {
      this.Items.push(item)
    });
    console.log(this.Items);
    
  }

}
