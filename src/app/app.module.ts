import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DateComponent } from './components/date/date.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { PipService } from './pip.service';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ProgressComponent,
    ExpensesComponent,
    ExpenseComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
