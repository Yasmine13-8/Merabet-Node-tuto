import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Merabet-Node-tuto';

  public appColor : string = '';

  public appliquerColor (colorApp: string){
    this.appColor=colorApp;
  }
}
