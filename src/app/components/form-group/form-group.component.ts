import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb:FormBuilder) { }

  itemToAdd() {
    return this.fb.group({
      street : ['', Validators.required],
      city : ['', Validators.required],
      state : ['', Validators.required],
      zip : ['', Validators.required]
    })
  }

  addMore() {
    var addresses= this.contactForm.get('address') as FormArray;
    addresses.push(this.itemToAdd());
  }

  removeAddress(indexToRemove:number) {
    var addresses= this.contactForm.get('address') as FormArray;
    addresses.removeAt(indexToRemove);
  }
  
  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName : ['', Validators.required],
      lastName : [''],
      email: ['', Validators.email],
      address : this.fb.array([this.itemToAdd()])
    })


   this.contactForm.valueChanges.subscribe(datat => {
     ///console.log(datat);
   });

   this.contactForm.get('firstName').valueChanges.subscribe(datat => {
      console.log("First Name");
      console.log(datat);
    });

    this.contactForm.get('lastName').valueChanges.subscribe(datat => {
      console.log("Last Name");
      console.log(datat);
    });

    this.contactForm.get('email').valueChanges.subscribe(datat => {
      console.log(this.contactForm.valid);
      console.log(datat);
    });
  }
}
