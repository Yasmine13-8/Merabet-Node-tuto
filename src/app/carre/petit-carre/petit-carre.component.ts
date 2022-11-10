import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-petit-carre',
  templateUrl: './petit-carre.component.html',
  styleUrls: ['./petit-carre.component.css']
})
export class PetitCarreComponent implements OnInit {


  @Input() color: string = '';
  @Output() changeColor : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {
  }

}
