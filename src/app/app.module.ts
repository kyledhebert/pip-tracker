import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expense/expense.component';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ProgressComponent,
    ExpensesComponent,
    ExpenseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
