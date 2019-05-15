import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

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
    DaughterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
        {
          path:'**',
          component:BadrouteComponent
        }
      ]
    )
      
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
