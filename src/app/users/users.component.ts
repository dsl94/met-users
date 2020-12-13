import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { 
    this.users = this.userService.fetchUsers();
  }

  ngOnInit(): void {
  }

}
