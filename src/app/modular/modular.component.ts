import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modular',
  templateUrl: './modular.component.html',
  styleUrls: ['./modular.component.scss']
})
export class ModularComponent implements OnInit {

  @Input() heading: string;
  @Input() img: ImageBitmap;
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
