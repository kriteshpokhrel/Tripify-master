import { Passenger } from './../models/passenger.model';
import { Component, OnInit } from '@angular/core';
import { Booking } from './../models/booking';
import { GetFlightsService } from './../services/get-flights.service';

import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingconfirmation',
  templateUrl: './bookingconfirmation.component.html',
  styleUrls: ['./bookingconfirmation.component.css']
})
export class BookingconfirmationComponent implements OnInit {
  booking:Booking;
  userName:string;
  userEmail:string;
  tripId:number;   
  id:Number;

  passengersDetails: Passenger[];
  constructor(private cookie: CookieService,
    private getFlightsService: GetFlightsService,
    private router:Router) { }

  ngOnInit(): void {
    this.performBooking();
  }

  performBooking()
  {
    this.userName= this.cookie.get("userName");
    this.userEmail = this.cookie.get("userEmail");
    this.tripId = parseInt(this.cookie.get("tripId"));
    this.passengersDetails = JSON.parse(this.cookie.get("passengerDetails"));
    this.booking = {
      name: this.userName,
      email: this.userEmail,
      tripId: this.tripId,
      passengers: this.passengersDetails
    }; 
    console.log(this.booking+" is what we received")
    this.getFlightsService.confirmBooking(this.booking).subscribe(
      {
        next: (id) => { 
          this.id = id;
        },
        error: (response) => { alert("No seats are available for your selected flight.")
      //this.router.navigate(['payment']) 
    }
      }
    )
  }
}
