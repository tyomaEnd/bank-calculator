import {Component} from '@angular/core';
import {Month} from './shared/interfaces';


export class Payment {
  numberPayment: string;
  datePayment: Date;
  residue: number;
  percent: number;
  payOut: number;
  monthlyPayment: number;

  constructor(numberPayment: string, datePayment: Date, residue: number, percent: number, payOut: number, monthlyPayment: number) {
    this.numberPayment = numberPayment;
    this.datePayment = datePayment;
    this.residue = residue;
    this.percent = percent;
    this.payOut = payOut;
    this.monthlyPayment = monthlyPayment;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputSumValue: any = '';
  duration: Month;
  inputCofValue: any = '';
  cofValue: number;
  monthlyPayment: any = 0;
  overpaymentCredit: any = 0;
  totalPayout: any = 0;
  status = false;
  date = new Date();
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
  chartPayments: Payment[];
  datePayments: any;

  constructor() {
    // this.duration = this.creditDuration[5];
  }

  getMask(): string {
    if (this.inputCofValue.indexOf(',') < 0) {
      // console.log('1');
      // console.log(this.inputCofValue);
      return '99z';
    }
    if (this.inputCofValue.indexOf(',') === 1) {
      // console.log('2');
      // console.log(this.inputCofValue);
      return '0,99';
    }
    if (this.inputCofValue.indexOf(',') === 2) {
      // console.log('3');
      // console.log(this.inputCofValue);
      return '00,99';
    }
  }

  recount(): void {
    if (this.inputSumValue !== null && this.inputSumValue !== '' && this.inputCofValue !== null && this.inputCofValue !== '' && this.duration !== null) {
      this.cofValue = parseFloat(this.inputSumValue.split(' ').join('')) / 100 * parseFloat(this.inputCofValue.replace(',', '.'));
      this.totalPayout = parseFloat(this.inputSumValue.split(' ').join('')) + this.cofValue;
      this.monthlyPayment = this.totalPayout / this.duration.months;
      this.overpaymentCredit = this.totalPayout - parseFloat(this.inputSumValue.split(' ').join(''));
      this.chartPayments = new Array(this.duration.months);
      this.datePayments = new Date();
      for (let i = 0; i < this.duration.months; i++) {
        this.chartPayments[i] = new Payment((i + 1) + ' платеж', new Date(), 0, 0, 0, this.monthlyPayment);
        // this.chartPayments[i].numberPayment = (i + 1) + ' платеж';
      }
    } else {
      this.totalPayout = 0;
      this.monthlyPayment = 0;
      this.overpaymentCredit = 0;
    }
  }

  numberWithCommas(x: number): string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  switch(): void {
    this.status = !this.status;
  }

  isButtonEnabled(): boolean {
    return this.inputSumValue !== null && this.inputSumValue !== '' && this.inputCofValue !== null && this.inputCofValue !== '' && this.duration !== null;
  }
}
