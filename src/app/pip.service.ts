import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { Expense } from './models/expense';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class PipService {

  // shown the first time the app is loaded
  sampleExpenses: Expense[] = [
    {id: 1, title: 'An Example Expense', cost: 45.00, reimbursed: false},
    {id: 2, title: 'An Example Reimbursed Expense', cost: 55.00, reimbursed: true}
  ];

  expenses: Expense[];
  goal: number;

  constructor() { }

  initAppState() {
    localStorage['expenses'] = JSON.stringify(this.sampleExpenses);
    localStorage['goal'] = 750;
    localStorage['initial'] = false;
  }

  restoreAppState() {
    this.expenses = JSON.parse(localStorage.getItem('expenses'));
    this.goal = parseInt(localStorage.getItem('goal'), 10);
  }

  saveAppState() {
    localStorage['expenses'] = JSON.stringify(this.expenses);
    localStorage['goal'] = this.goal;
  }

  getExpenses(): Observable<Expense[]> {
    this.expenses = JSON.parse(localStorage.getItem('expenses'));
    return Observable.of(this.expenses);
  }

  saveExpenses() {
    localStorage['expenses'] = JSON.stringify(this.expenses);
  }

  getSpendingGoal(): number {
    return this.goal;
  }

  addExpense(expense: Expense): Observable<Expense> {
    const newExpense: Expense = {
      id: this.expenses.length + 1 + new Date().valueOf(),
      title: expense.title,
      cost: expense.cost,
      reimbursed: false
    };
    this.expenses.push(newExpense);
    this.saveAppState();
    return Observable.of(newExpense);
  }

  deleteExpense(expense: Expense): Observable<Expense> {
    const deletedExpense: Expense = _.find(this.expenses, ['id', expense.id]);
    this.expenses = this.expenses.filter((e: Expense) => {
      return e.id !== expense.id;
    });
    this.saveAppState();
    return Observable.of(deletedExpense);
  }

  updateExpense(expense) {
    expense['cost'] = parseFloat(expense['cost']);
    const updatedExpense: Expense = _.find(this.expenses, ['id', expense.id]);
    _.assign(updatedExpense, expense);
    this.saveAppState();
    return Observable.of(updatedExpense);
  }

  toggleReimbursed(expense: Expense) {
    const toggledExpense: Expense = _.find(this.expenses, ['id', expense.id]);
    toggledExpense.reimbursed = toggledExpense.reimbursed === true ? false : true;
    this.saveAppState();
    return Observable.of(toggledExpense);
  }

}
