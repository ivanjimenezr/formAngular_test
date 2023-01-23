import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserRegister } from '../form-component/user-register';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  public campaignName: any;
  public agencyName: any;

  todosDatos:any = {}

  // Incialización del formulario
  public userRegisterForm: any = null;
	// variable submitted a false
	public submitted: boolean = false;
  
  constructor(private formBuilder: FormBuilder) { 

    // Podemos meter valores por defecto en las comillas
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]],
    });

  }

  ngOnInit(): void {
  }

  upload() {
    console.log('campaignName directo del input: ', this.campaignName)
    this.todosDatos.campaign = this.campaignName
    this.todosDatos.agency = this.agencyName
    console.log('todosDatos: ',this.todosDatos)
    console.log(typeof this.todosDatos);
  }

}
