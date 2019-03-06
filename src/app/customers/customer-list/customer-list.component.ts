import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  userName: String;
  private us: UsersService;
  constructor(private uss: UsersService) { this.us = uss; }

  ngOnInit() {
    this.userName = this.us.getName();
  }

  increment() {
    this.userName = this.us.getName();
  }

}
