import { time } from "node:console";
import { timeoutProvider } from "rxjs/internal/scheduler/timeoutProvider";

export class bus{
   
    id: string="";
    CustomerLocation: string="";
    CustomerLocationTo: string="";
    CustomerTicketCount: number=0;
    CustomerTravelDate: Date=new Date();
    CustomerTravelTime: string="";
}