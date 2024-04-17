import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent {
  @Input() arg1:any="";
  @Output() arg2 =new EventEmitter<string>();

  send(){
     this.arg2.emit("hii papa")
  }

 

}
