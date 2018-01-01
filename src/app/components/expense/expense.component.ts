import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Expense } from './../../models/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  @Input()
  expense: Expense;

  @Output()
  delete: EventEmitter<Expense> = new EventEmitter();

  @Output()
  edit: EventEmitter<Expense> = new EventEmitter();

  @Output()
  reimburse: EventEmitter<Expense> = new EventEmitter();

  editing = false;

  constructor() { }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.expense);
    }
    this.editing = !this.editing;
  }

  onCostChange(editedCost: number) {
    this.expense.cost = editedCost;
  }

  onTitleChange(editedTitle: string) {
    this.expense.title = editedTitle;
  }


  onDelete() {
    this.delete.emit(this.expense);
  }

  onToggleReimbursed() {
    this.reimburse.emit(this.expense);
  }

}
