import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialDesignComponent } from './material-design.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: MaterialDesignComponent },
  {path: 'grid-list',component: GridListComponent},
  {path: 'header-bar', component: HeaderBarComponent},
  {path: 'side-bar',component: SideBarComponent},
  {path: 'stapper',component: StepperComponent},
  {path: 'table' , component: TableComponent},
  {path: 'tabs', component:TabsComponent},
  {path: 'form', component:FormComponent },
  //{path: '', redirectTo: "/grid-list",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MaterialDesignRoutingModule { }
