import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-manager';
  constructor(){}
   allPerson = [
    {name:"dinesh",age:"28"},
    {name:"dinesh",age:"28"},
    {name:"dinesh",age:"28"}
  ];
}
