import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


  HandleOrderCreated(orderCreatedEvent : OrderCreatedEvent) {
    console.log('=> ', orderCreatedEvent)
  }
}
