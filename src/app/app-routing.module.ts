import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { HelpComponent } from './help/help.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
const routes : Routes =[
   { path: '', component : HomepageComponent},
   {path: 'signup', component: SignupComponent},
   {path: 'loginpage', component: LoginpageComponent},
   {path: 'about', component: AboutComponent},
   {path: 'welcomepage', component: WelcomepageComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'help', component: HelpComponent},
   {path: 'homepage', component: HomepageComponent},
   {path: 'terms_conditions', component: TermsConditionsComponent}

];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule{

}
