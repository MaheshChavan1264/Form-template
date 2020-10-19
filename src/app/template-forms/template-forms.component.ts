import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent implements OnInit {
  constructor() {}
  person: any = {};
  ngOnInit(): void {
    this.person = {
      firstName: 'Mahesh',
      lastName: 'Chavan',
    };
  }
  submitForm = (form: any) => {};
  clearForm = (form: any) => {
    form.reset();
    form.submitted = false;
  };
}
