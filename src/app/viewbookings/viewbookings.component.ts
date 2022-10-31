import { Passenger } from './../models/passenger.model';
import { GetFlightsService } from './../services/get-flights.service';
import { CookieService } from 'ngx-cookie-service';
import { BookingView } from './../models/bookings-view';
import { BookingconfirmationComponent } from './../bookingconfirmation/bookingconfirmation.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.css']
})
export class ViewbookingsComponent implements OnInit {

  bookingsView: BookingView[];
  userEmail: string;
  expandPsngrDetails: boolean = false;
  psngrCount:number;

  passengers: Passenger[];
  constructor(private cookies: CookieService,
    private getFlightsService: GetFlightsService) { }

  ngOnInit(): void {

    this.showBookings();
  }

  expandModifyDetails()
  {
    //get passengers length !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.psngrCount = 2;
    this.expandPsngrDetails= !this.expandPsngrDetails;
  }
  showBookings() {
    //we get the useremail from cookies and pass that as the paramter to find bookings.
    this.userEmail = this.cookies.get("userEmail");

    // get bookings for current active email ID
    this.getFlightsService.getMyBooking(this.userEmail).subscribe(
      {
        next: (bookingsView) => {
          this.bookingsView = bookingsView,
            console.log(this.bookingsView)
        },
        error: (response) => { console.log(response) }
      }
    )
  }

}
