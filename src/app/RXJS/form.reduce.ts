import {Injectable} from '@angular/core';
import { BehaviorSubject} from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FormReduce {
      private formValue$= new BehaviorSubject<any>({})
      

      getFormState$ = this.formValue$.asObservable();

      constructor(){}

      setFormState(val: any){
        this.formValue$.next(val)
      }
}