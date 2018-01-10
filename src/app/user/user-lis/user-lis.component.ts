import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-lis',
  templateUrl: './user-lis.component.html',
  styleUrls: ['./user-lis.component.css']
})
export class UserLisComponent implements OnInit {
  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  destroy(user: User) {
    const response = confirm('delete?');
    if (response) {
      this.destroyUserEvent.emit(user);
    }
  }

  update(users) {
    this.updateUserEvent.emit(users);
  }
}
