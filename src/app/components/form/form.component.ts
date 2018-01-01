import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Expense } from './../../models/expense';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output()
  add: EventEmitter<Expense> = new EventEmitter<Expense>();

  constructor() { }

  onSubmit(itemForm: NgForm) {
    this.add.emit(itemForm.value);
    itemForm.reset();
  }

}
