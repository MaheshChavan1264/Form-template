import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}
  personForm: FormGroup;
  selectedHobbies: [string];
  myHobbies: any = [
    {
      name: 'Sports',
      value: 'sports',
    },
    {
      name: 'Music',
      value: 'music',
    },
    {
      name: 'Movie',
      value: 'movie',
    },
    {
      name: 'Reading',
      value: 'reading',
    },
    {
      name: 'Writing',
      value: 'writing',
    },
  ];
  ngOnInit(): void {
    this.createFormInputs();
    this.onSubmit();
  }
  createFormInputs() {
    this.personForm = new FormGroup({
      hobbies: this.createHobbies(this.myHobbies),
    });
  }
  onSubmit() {}

  createHobbies(hobbiesInput) {
    const arr = hobbiesInput.map((hobby) => {
      return new FormControl(hobby);
    });
    return new FormArray(arr);
  }
}
