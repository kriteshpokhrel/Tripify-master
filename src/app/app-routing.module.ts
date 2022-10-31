import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { BookingconfirmationComponent } from './bookingconfirmation/bookingconfirmation.component';
import { BookingComponent } from './booking/booking.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PaymentComponent } from './payment/payment.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'registration', component:RegistrationComponent},
  {path: 'searchresults',component:SearchresultsComponent},
  {path: 'booking',component:BookingComponent},
  {path:'bookingConfirmation', component:BookingconfirmationComponent},
  {path:'payment',component: PaymentComponent},
  {path:'viewbookings',component:ViewbookingsComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent,HomepageComponent,RegistrationComponent];