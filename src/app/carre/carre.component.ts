import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carre',
  templateUrl: './carre.component.html',
  styleUrls: ['./carre.component.css']
})
export class CarreComponent implements OnInit {

  public color : string = '';

  @Output() appliquerColor : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }


  public changeColor (color : string){
        this.color = color;
  }

  ngOnInit(): void {
  }

}
