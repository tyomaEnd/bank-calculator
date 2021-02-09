import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ColorBarComponent} from './widgets/color-bar/color-bar.component';
import {FormsModule} from '@angular/forms';
import {SocialMediaComponent} from './social-media/social-media.component';
import {CreditCalculatorComponent} from './credit-calculator/credit-calculator.component';
import {AppRoutingModule} from './app-routing.module';
import {CreditRatingComponent} from './credit-rating/credit-rating.component';
import { MicroloansComponent } from './microloans/microloans.component';
import { SpecialOffersComponent } from './special-offers/special-offers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorBarComponent,
    SocialMediaComponent,
    CreditCalculatorComponent,
    CreditRatingComponent,
    MicroloansComponent,
    SpecialOffersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
