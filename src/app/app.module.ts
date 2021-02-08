import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ColorBarComponent} from './widgets/color-bar/color-bar.component';
import {FormsModule} from '@angular/forms';
import { SocialMediaComponent } from './social-media/social-media.component';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorBarComponent,
    SocialMediaComponent,
    CreditCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
