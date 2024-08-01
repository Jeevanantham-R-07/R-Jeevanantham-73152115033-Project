import { Injectable } from '@angular/core';
import { bus } from './model/bus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  url : string;
  Bus : bus;
  busarr:bus[];

  constructor(private http : HttpClient) { 
    this.url = "http://localhost:3005/bus";
    this.Bus=new bus();
    this.busarr=[];
  }
  insertvalues(Bus :bus){
    this.http.post<bus>(this.url,   Bus).subscribe();
          return "Customer Ticket Booked Successfully";
  }
  updatevalues(Bus:bus){
    this.http.put<bus>(this.url+"/" +Bus.id,  Bus).subscribe();
    return "Customer Details Updated";
  }
  cancelvalues(CustomerId:Number){
    this.http.delete<bus>(this.url+"/" +CustomerId ).subscribe();
    return "Customer Ticket canceled Successfully";
  }
  statusvalues(CustomerId:Number){
    this.http.get<bus>(this.url+"/" +CustomerId ).subscribe(data=>this.Bus=data);
    return this.Bus;
  }
  Details(){
    this.http.get<bus[]>(this.url ).subscribe(data=>this.busarr=data);
    return this.busarr;
  }
}
