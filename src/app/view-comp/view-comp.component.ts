import { Component } from '@angular/core';
import { FormReduce } from '../RXJS/form.reduce';
import { take ,map,tap} from 'rxjs/operators';

@Component({
  selector: 'app-view-comp',
  templateUrl: './view-comp.component.html',
  styleUrls: ['./view-comp.component.scss']
})
export class ViewCompComponent {
   abc=null;
  constructor(private emR:FormReduce){

  }
  onSave(){
      console.log(this.abc,this.emR.getFormState$)
      this.emR.getFormState$.subscribe((val: any)=>{
           console.log(val);
           
      })
  }
      
}
