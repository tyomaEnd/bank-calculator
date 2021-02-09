import {Component, OnInit} from '@angular/core';
import {Month} from '../shared/interfaces';

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.scss']
})
export class CreditCalculatorComponent implements OnInit {
  inputSumValue = 10000;
  inputRate = 10;
  duration: Month;
  cofValue: number;
  monthlyPayment: any = 0;
  overpaymentCredit: any = 0;
  totalPayout: any = 0;
  // status = false;
  // date = new Date();
  // chartPayments: Payment[];
  // datePayments: any;

  creditDuration: Month[] = [
    {title: '1 месяц', months: 1},
    {title: '3 месяца', months: 3},
    {title: '6 месяцев', months: 6},
    {title: '9 месяцев', months: 9},
    {title: '1 год', months: 12},
    {title: '1,5 года', months: 18},
    {title: '2 года', months: 24},
    {title: '3 года', months: 36},
    {title: '4 года', months: 48},
    {title: '5 лет', months: 60},
    {title: '6 лет', months: 72},
    {title: '7 лет', months: 84},
    {title: '10 лет', months: 120},
    {title: '15 лет', months: 180},
    {title: '20 лет', months: 240},
    {title: '25 лет', months: 300},
    {title: '30 лет', months: 360}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  recount(): void {
    if (this.inputSumValue) {
      this.cofValue = this.inputSumValue / 100 * this.inputRate;
      this.totalPayout = +this.inputSumValue + +this.cofValue;
      this.monthlyPayment = this.totalPayout / this.duration.months;
      this.overpaymentCredit = this.totalPayout - this.inputSumValue;
      // this.chartPayments = new Array(this.duration.months);
      // this.datePayments = new Date();
      // for (let i = 0; i < this.duration.months; i++) {
      //   this.chartPayments[i] = new Payment((i + 1) + ' платеж', new Date(), 0, 0, 0, this.monthlyPayment);
      //   // this.chartPayments[i].numberPayment = (i + 1) + ' платеж';
      // }
    } else {
      this.totalPayout = 0;
      this.monthlyPayment = 0;
      this.overpaymentCredit = 0;
    }
    console.log(this.duration);
  }
}
