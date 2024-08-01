import { Component } from '@angular/core';
import { bus } from './model/bus';
import { BusService } from './bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  Bus :bus;
  result:string;
  busarr:bus[];
  flag:boolean;
  
  
  constructor(private service:BusService){
    
    this. Bus=new bus();
    this.result="";
    this.busarr=[];
    this.flag=false;
    

  }

  insertvalues(data : any) {
    this.Bus.id=data.CustomerId;
    this.Bus.CustomerLocation=data.CustomerLocation;
    this.Bus.CustomerLocationTo=data.CustomerLocationTo;
    this.Bus.CustomerTicketCount=data.CustomerTicketCount;
    this.Bus.CustomerTravelDate=data.CustomerTravelDate;
    this.Bus.CustomerTravelTime=data.CustomerTravelTime;
    alert(data.CustomerId+" "+data.CustomerLocation+" "+data.CustomerLocationTo+" "
      +data.CustomerTicketCount+" "+data.CustomerTravelDate+" "+data.CustomerTravelTime);  
    this.result=this.service.insertvalues(this.Bus);
      
  }
  updatevalues(data : any) {
    this.Bus.id=data.CustomerId;
    this.Bus.CustomerLocation=data.CustomerLocation;
    this.Bus.CustomerLocationTo=data.CustomerLocationTo;
    this.Bus.CustomerTicketCount=data.CustomerTicketCount;
    this.Bus.CustomerTravelDate=data.CustomerTravelDate;
    this.Bus.CustomerTravelTime=data.CustomerTravelTime;
   
    this.result=this.service.updatevalues(this.Bus);
      
  }
  cancelvalues (data : any){
    this.result=this.service. cancelvalues(data.CustomerId);
  }
  statusvalues(data:any){
    this.Bus=this.service.statusvalues(data.CustomerId);
    this.result=this.Bus.id+" your successfully booked ticket for the travel between "+this.Bus.CustomerLocation+"-"+this.Bus.CustomerLocationTo
        +" here you booked "+this.Bus.CustomerTicketCount+" tickets and you must have to reach in "+this.Bus.CustomerTravelDate+" and "+this.Bus.CustomerTravelTime;

  
      }
  Details(){
    this.busarr=this.service.Details();
    this.flag=true;
  }
}
