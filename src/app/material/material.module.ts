import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


const matterialComponent=[
  MatButtonModule, MatSidenavModule,MatToolbarModule,MatIconModule,
  MatListModule

]

@NgModule({
  imports:[
    matterialComponent,
   
  ],
  exports:[
    matterialComponent
  ]
})
export class MaterialModule { }
