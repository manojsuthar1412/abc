import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  msg = 'A message from CEO';
  img = 'https://images.pexels.com/photos/2522677/pexels-photo-2522677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  url = 'contact';

  heading = 'Contact E-comm';

  className = 'about-background';
  heroTitle = 'About E-comm';
  subTitle = '';
  imgUrl: string;
  constructor() { }

  ngOnInit() {
    this.imgUrl = 'assets/about.png';
  }

}
