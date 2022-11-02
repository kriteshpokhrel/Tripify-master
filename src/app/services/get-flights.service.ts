import { Booking } from './../models/booking';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightQuery } from '../models/flight-query.model';
import { FlightAvailable } from '../models/flights-available.model';
import { BookingView } from '../models/bookings-view';
@Injectable({
  providedIn: 'root'
})
export class GetFlightsService {

  constructor(private http:HttpClient) { } 
  baseApiUrl: string = environment.baseApiUrl;

  getFlights(flightQuery: FlightQuery): Observable<FlightAvailable[]>
  {
    console.log(this.baseApiUrl+'/api/General/GetTrips/'+flightQuery.sourceId+"/"+flightQuery.destinationId+"/"+flightQuery.sourceTime+"/"+flightQuery.passengerCount);
   return  this.http.get<FlightAvailable[]>(this.baseApiUrl+'/api/General/GetTrips/'+flightQuery.sourceId+"/"+flightQuery.destinationId+"/"+flightQuery.sourceTime+"/"+flightQuery.passengerCount);
  }

  confirmBooking(booking:Booking):Observable<Response>
  {
    console.log(booking);
    return this.http.post<Response>(this.baseApiUrl+'/api/SeatBooking/BookSeats',booking);
  }
  
  getMyBooking(email:string):Observable<BookingView[]>
  {
    console.log(email+" bookings are being displayed");
    return this.http.get<BookingView[]>(this.baseApiUrl+'/api/General/GetMyBookings/'+email);
  }


  cancelBooking(index:number): Observable<Response>
{
  
  console.log("booking no." +index+" is getting deleted");
  return this.http.delete<Response>(this.baseApiUrl+'/api/SeatBooking/CancelBookings/'+index);

}
}
