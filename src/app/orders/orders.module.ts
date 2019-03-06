import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { UsersModule } from '../users/users.module';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    UsersModule
  ],
  declarations: [OrderListComponent]
})
export class OrdersModule { }
