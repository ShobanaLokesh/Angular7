import { Component, OnInit } from '@angular/core';
import {LocalService} from '../../services/local.service'


@Component({
  selector: 'app-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {
  allbanks:any
  constructor(private local: LocalService) { }

  ngOnInit() {
    this.acccessLocalService()
    
  }
 acccessLocalService = function()
 {
  //  console.log(this.local.myPI)
  //  this.local.displayBanks()
  // this.local.addBank()
  this.allbanks =this.local.addBank()
 }
}
