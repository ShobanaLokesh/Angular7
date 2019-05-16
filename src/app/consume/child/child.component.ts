import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() sendname
  @Output()  sendToParent =new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  BoradcastChange =function(){
    this.sendToParent.emit(this.sendname)
  }

}
