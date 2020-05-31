import { Component, OnInit,ViewChild,TemplateRef,ViewChildren,AfterViewInit,
ViewContainerRef,QueryList } from '@angular/core';
import {MessageDirective} from '../directives/manage-directive'

@Component({
  selector: 'app-ngifelsetest',
  templateUrl: './ngifelsetest.component.html',
  styleUrls: ['./ngifelsetest.component.css']
})
export class NgifelsetestComponent implements OnInit {

  myDir = '';
  constructor() { }

  ngOnInit(): void {
  }

}
