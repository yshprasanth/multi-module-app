import { Injectable } from '@angular/core';
import { UsersModule } from './users.module';

@Injectable()
export class UsersService {

  private counter: number = 0;
  constructor() { }

  getName() {
    return "Counter$" + (this.counter++);
  }
}
