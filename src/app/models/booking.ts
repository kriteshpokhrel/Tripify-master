import { Passenger } from './passenger.model';
export interface Booking
{
    name:string;
    email:string;
    tripId:number;
    passengers: Passenger[];
}