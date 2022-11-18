import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-petit-carre',
  templateUrl: './petit-carre.component.html',
  styleUrls: ['./petit-carre.component.css']
})
export class PetitCarreComponent implements OnInit {

  @Input() backcolor: string = '#F25022';

  @Output() rectangleClicked : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.rectangleClicked.emit(this.backcolor);
  }

}
