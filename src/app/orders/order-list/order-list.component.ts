import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

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
