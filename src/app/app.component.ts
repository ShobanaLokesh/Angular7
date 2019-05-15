import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7';
  name="easy ";
  score=20;


displaymessage = function()
{
 this.score= this.score*10;
}
}