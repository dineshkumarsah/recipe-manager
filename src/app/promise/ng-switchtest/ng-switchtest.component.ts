import {
  Component, OnInit, ViewChild, TemplateRef, ViewChildren, AfterViewInit,
  ViewContainerRef, QueryList
} from '@angular/core';
import { MessageDirectiveDirective } from '../../promise/message-directive.directive'


@Component({
  selector: 'app-ng-switchtest',
  templateUrl: './ng-switchtest.component.html',
  styleUrls: ['./ng-switchtest.component.css']
})
export class NgSwitchtestComponent implements OnInit, AfterViewInit {

  @ViewChild('msg')
  private msgTempRef: TemplateRef<any>

  @ViewChildren(MessageDirectiveDirective)
  private queryList: QueryList<MessageDirectiveDirective>

  ngAfterViewInit() {

    this.queryList.map(messageDirective =>
      messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
  }
  ngOnInit() { }

}
