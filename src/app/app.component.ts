import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merabet-Hadjour-TP';

  public backcolor : string = '#FFFFFF';

  public handlerColor (valueEmitted: string){
    this.backcolor= valueEmitted;
  }
}
