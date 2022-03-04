import { Observable } from 'rxjs';
import { IUser } from './../Shared Classes and types/IUser';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}
  userList: IUser[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: IUser) => {
      this.userList = [
        { name: data.name, username: data.username, email: data.email },
      ];
    });
  }
}
