import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumechild3',
  templateUrl: './consumechild3.component.html',
  styleUrls: ['./consumechild3.component.css']
})
export class Consumechild3Component implements OnInit {

  constructor() { }
  name = "Angular 7"
  ngOnInit() {
  }

  RecievedNewname = function(e)
  {
    console.log(e)
  }

}
