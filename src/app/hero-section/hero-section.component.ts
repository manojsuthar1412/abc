import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  @Input() backClass: string;
  @Input() imgUrl: string;
  @Input() heading: string;
  @Input() subHeading: string;

  img: string;
  constructor() { 
    
  }
  
  ngOnInit() {
    this.img = `url('${this.imgUrl}')`;
  }

}
