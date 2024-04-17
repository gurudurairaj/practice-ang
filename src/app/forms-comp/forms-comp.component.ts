import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormReduce} from '../RXJS/form.reduce'
import {Router} from '@angular/router';
import {ChildCompComponent} from '../child-comp/child-comp.component'

@Component({
  selector: 'app-forms-comp',
  templateUrl: './forms-comp.component.html',
  styleUrls: ['./forms-comp.component.scss']
})
export class FormsCompComponent implements OnInit{
         
  hello="hello child";
  hc=""
  loginForm: any;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private emR:FormReduce,
    private rou:Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.emR.setFormState(this.loginForm.value)
    console.log(this.loginForm.value);

   
  this.rou.navigate(['/view'])
  }

  getChildMsg(val: string){
   this.hc=val
  }
 


}
