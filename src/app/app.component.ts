import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  yesNoAnswer = 'no';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      yesNoAnswer: [
        {
          value: 'no',
          disabled: false,
        },
      ],
    });
  }

  submit() {
    this.form.get('yesNoAnswer').disable();
    console.log(this.form.value);
  }
}
