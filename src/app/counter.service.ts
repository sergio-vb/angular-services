import { Injectable } from '@angular/core';

@Injectable()
export class CounterService{
    counter:number = 0;

    count(){
        this.counter++;
        console.log("Counter: ", this.counter);
    }
}