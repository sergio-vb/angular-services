import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from 'app/users/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private usersService:UsersService){}

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
    this.usersService.swithUser(id);
  }
}
