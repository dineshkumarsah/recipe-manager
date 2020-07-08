import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignRoutingModule } from './material-design-routing.module';
import { MaterialDesignComponent } from './material-design.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import {MaterialModule} from '../material/material.module'


@NgModule({
  declarations: [MaterialDesignComponent, GridListComponent, StepperComponent, TabsComponent, ExpansionPanelComponent, TableComponent, FormComponent, SideBarComponent, HeaderBarComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialDesignRoutingModule,MaterialModule
  ],
  providers: [],
  bootstrap: [MaterialDesignComponent]
})
export class MaterialDesignModule { }