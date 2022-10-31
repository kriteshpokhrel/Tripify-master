import { FlightAvailable } from './../models/flights-available.model';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userName:string;
  userEmail:string;
  flightAvailable:FlightAvailable;
  
  constructor(private cookie:CookieService,
    private router:Router) { }
  ngOnInit(): void {
    this.flightAvailable = JSON.parse(this.cookie.get("selectedFlight"))
    console.log(this.flightAvailable);  
  }
  
  confirmBooking()
  {
    if(this.userEmail==='' || this.userName==='')
    {
      alert("Please enter all fields");
      console.log("Fields empty")
    }
    else{
      this.cookie.set("userName",this.userName);
      this.cookie.set("userEmail",this.userEmail);
      console.log("Fields not empty"+ this.userName+this.userEmail);
      this.router.navigate(['bookingConfirmation']);
    }
    }


}
