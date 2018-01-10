import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import {User} from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    new User(1, 'jose', 'huapaya', 'jose@gmail.com'),
    new User(2, 'jose', 'huapaya', 'jose@gmail.com'),
    new User(3, 'jose', 'huapaya', 'jose@gmail.com')
  ];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .then(users => this.users = users);
  }

  create(user: User) {
    this.users.push(user);
  }
  destroy(user: User) {
    const i = this.users.indexOf(user);
    this.users.splice(i, i);
  }
  update(users) {
    const i = this.users.indexOf(users.original);
    this.users[i] = users.edited;
  }
}
