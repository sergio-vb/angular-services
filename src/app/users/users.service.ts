import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  swithUser(id:number){
    console.log("User will be switched.");
  }

  getActiveUsers(){
    return this.activeUsers;
  }
  getInactiveUsers(){
    return this.activeUsers;
  }

}
