import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.css']
})
export class CarreComponent implements OnInit {


  @Output() colorEmitted: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }


  handler(valueEmitted: string) {
    this.colorEmitted.emit(valueEmitted);
  }

  ngOnInit(): void {
  }

}
