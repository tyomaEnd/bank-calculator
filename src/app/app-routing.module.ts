import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreditCalculatorComponent} from './credit-calculator/credit-calculator.component';
import {CreditRatingComponent} from './credit-rating/credit-rating.component';
import {MicroloansComponent} from './microloans/microloans.component';
import {SpecialOffersComponent} from './special-offers/special-offers.component';

const routes: Routes = [
  {path: '', redirectTo: '/credit-calculator', pathMatch: 'full'},
  {path: 'credit-calculator', component: CreditCalculatorComponent},
  {path: 'credit-rating', component: CreditRatingComponent},
  {path: 'microloans', component: MicroloansComponent},
  {path: 'special-offers', component: SpecialOffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
