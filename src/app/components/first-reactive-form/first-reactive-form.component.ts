import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-reactive-form',
  templateUrl: './first-reactive-form.component.html',
  styleUrls: ['./first-reactive-form.component.css']
})
export class FirstReactiveFormComponent implements OnInit {
  email: FormControl;
  constructor() { }

  ngOnInit() {
    //this.email =new FormControl("Pushkar");
    this.email =new FormControl("pushakr",[Validators.required, Validators.email]);

    this.email.valueChanges.subscribe(newEmailValue=> {
      console.log("================");
      console.log("using valueChanges Observable = "+ newEmailValue);
      console.log("using value property = "+this.email.value);
    })
  }

  changeEmailValue() {
    this.email.setValue("setNewValue");
  }
}
