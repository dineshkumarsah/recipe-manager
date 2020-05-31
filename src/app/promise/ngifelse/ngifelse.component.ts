import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {

  toggleFlag1 = true;
  toggleFlag2 = true;
  toggleFlag3 = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onToggle1(){
    this.toggleFlag1 = (this.toggleFlag1 === true) ? false : true;
  }
  onToggle2(){
    this.toggleFlag2 = (this.toggleFlag2 === true) ? false : true;
  }
  onToggle3(){
    this.toggleFlag3 = (this.toggleFlag3 === true) ? false : true;
  }

}
