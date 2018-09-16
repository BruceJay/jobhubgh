import { AppRoutingModule } from './app-routing.module';
import { CustomeMaterialModule } from './customematerialModule';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component'
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomepageComponent,
    LoginpageComponent,
    AboutComponent,
    WelcomepageComponent,
    ContactComponent,
    HelpComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    CustomeMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
