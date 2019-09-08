import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  className = 'about-background';
  heroTitle = 'Contact E-comm';
  subTitle = 'We are happy to help you';
  imgUrl: string;


  title = 'Our Details';
  img = 'https://images.pexels.com/photos/1144268/pexels-photo-1144268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
  linkUrl = 'about';

  constructor() { }

  ngOnInit() {
    this.imgUrl = '/assets/contact.png';
  }

}
