import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsmpleComponent } from './asmple/asmple.component';
import { DirectiveComponent } from './superhtml/directive/directive.component';
import { InbuiltComponent } from './Pipes/inbuilt/inbuilt.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { FamilyComponent } from './family/family/family.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { Consumechild3Component } from './consume/consumechild3/consumechild3.component';
import { ChildComponent } from './consume/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    AsmpleComponent,
    DirectiveComponent,
    InbuiltComponent,
    BadrouteComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    DaughterComponent,
    Consumechild1Component,
    Consumechild2Component,
    Consumechild3Component,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path:'',
          redirectTo:'pipe',
          pathMatch:'full'
        },
        {
          path:'family',
          component:FamilyComponent,
          children:[
            {
              path:'',
              redirectTo:'mother',
              pathMatch:'full'
            },
            {
              path:'father',
              component:FatherComponent,
            },
            {
              path:'mother',
              component:MotherComponent,
            },
            {
              path:'daughter',
              component:DaughterComponent,
            }
          ]
        },
        {
          path:'directive',
          component:DirectiveComponent
        },
        {
          path:'pipe',
          component:InbuiltComponent
        },
        // {
        //   path:'**',
        //   component:BadrouteComponent
        // },
        {
          path:'ConsumeServices',
          component:Consumechild3Component,
          children:[
            {
              path:'',
              redirectTo:'Child1',
              pathMatch:'full'
            },
            {
              path:'Child1',
              component:Consumechild1Component,
            },
            {
              path:'Child2',
              component:Consumechild2Component,
            }
          ]
        }
      ]
    )
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
