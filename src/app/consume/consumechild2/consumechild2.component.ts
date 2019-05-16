import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../services/local.service'

@Component({
  selector: 'app-consumechild2',
  templateUrl: './consumechild2.component.html',
  styleUrls: ['./consumechild2.component.css']
})
export class Consumechild2Component implements OnInit {
  allbanks:any
  constructor(private local: LocalService) { }

  ngOnInit() {
    // this.local.displayBanks()
    // this.local.addBank()
    this.allbanks =this.local.addBank()
  }

}
