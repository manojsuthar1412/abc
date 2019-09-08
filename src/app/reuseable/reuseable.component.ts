import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reuseable',
  templateUrl: './reuseable.component.html',
  styleUrls: ['./reuseable.component.scss']
})
export class ReuseableComponent implements OnInit {

  @Input() title: string;
  link;
  constructor() { }

  ngOnInit() {
    this.link = this.title.split(' ');
    this.link = this.link[0].toLowerCase();
    
  }

}
