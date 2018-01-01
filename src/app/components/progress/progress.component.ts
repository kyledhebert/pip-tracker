import { Component, OnChanges, Input } from '@angular/core';
import * as _ from 'lodash';

import { Expense } from './../../models/expense';
import { PipService } from '../../pip.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnChanges {

  @Input()
  expenses: Expense[];

  @Input()
  goal: number;

  @Input()
  totalSpent: number;

  progress: number;

  constructor() { }

  ngOnChanges() {
    this.progress = (this.totalSpent / this.goal) * 100;
  }

}
