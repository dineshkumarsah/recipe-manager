import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

const matterialComponent=[
  MatButtonModule
]

@NgModule({
  imports:[
    matterialComponent
  ],
  exports:[
    matterialComponent
  ]
})
export class MaterialModule { }
