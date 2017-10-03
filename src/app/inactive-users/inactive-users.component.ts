import { Component, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from 'app/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  
  constructor(private usersService:UsersService){}
  
  ngOnInit(){
    this.users = this.usersService.getInactiveUsers();
  }

  onSetToActive(id: number) {
    this.usersService.swithUserToActive(id);
  }
}
