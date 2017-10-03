import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService:CounterService){}

  swithUserToActive(index:number){
    this.activeUsers.push(this.inactiveUsers.splice(index, 1)[0]);;
    this.counterService.count();
  }
  swithUserToInactive(index:number){
    this.inactiveUsers.push(this.activeUsers.splice(index, 1)[0]);;
    this.counterService.count();
  }

  getActiveUsers(){
    return this.activeUsers;
  }
  getInactiveUsers(){
    return this.inactiveUsers;
  }

}
