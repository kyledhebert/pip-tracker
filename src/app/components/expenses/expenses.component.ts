import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Expense } from '../../models/expense';
import { PipService } from '../../pip.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  allExpenses: Expense[];
  goal: number;
  totalSpent: number;

  expenses: Expense[];
  reimbursed: Expense[];
  constructor(private service: PipService) { }

  ngOnInit() {
    if (localStorage && localStorage['initial'] === 'false') {
      this.service.restoreAppState();
      this.getAllExpensesAndGoal();
    } else {
      this.service.initAppState();
      this.service.restoreAppState();
      this.getAllExpensesAndGoal();
    }
    this.parseExpenses();
    this.getTotalSpent();
  }

  private parseExpenses() {
    this.expenses = _.filter(this.allExpenses, ['reimbursed', false]);
    this.reimbursed = _.filter(this.allExpenses, ['reimbursed', true]);
  }

  private getAllExpensesAndGoal() {
    this.service
      .getExpenses()
      .subscribe((data: Expense[]) => this.allExpenses = data);
    this.goal = this.service.getSpendingGoal();
  }

  private getTotalSpent() {
    this.totalSpent = _.reduce(this.allExpenses, function(a, b) {
      return a + b.cost;
    }, 0);
  }

  handleAdd(expense: Expense) {
    this.service
      .addExpense(expense)
      .subscribe((data: Expense) => {
        this.getAllExpensesAndGoal();
        this.parseExpenses();
        this.getTotalSpent();
      });
  }

  private handleDelete(expense: Expense) {
    this.service
      .deleteExpense(expense)
      .subscribe((data: Expense) => {
        this.getAllExpensesAndGoal();
        this.parseExpenses();
        this.getTotalSpent();
      });
  }

  private handleEdit(expense: Expense) {
    this.service
      .updateExpense(expense)
      .subscribe((data: Expense) => {
        this.getAllExpensesAndGoal();
        this.parseExpenses();
        this.getTotalSpent();
      });
  }

  private handleReimburse(expense: Expense) {
    this.service
      .toggleReimbursed(expense)
      .subscribe((data: Expense) => {
        this.getAllExpensesAndGoal();
        this.parseExpenses();
        this.getTotalSpent();
      });
  }

}
