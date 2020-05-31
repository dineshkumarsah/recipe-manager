import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cpMsg]'
})
export class MessageDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
