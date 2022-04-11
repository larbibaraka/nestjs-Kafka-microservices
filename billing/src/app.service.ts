import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderCreatedEvent } from './order-created.event';

@Injectable()
export class AppService {

  constructor(@Inject('AUTH_SERVICE') private readonly authClient : ClientKafka) {}
  getHello(): string {
    return 'Hello World!';
  }


  HandleOrderCreated(orderCreatedEvent : OrderCreatedEvent) {
    console.log('=> ', orderCreatedEvent)
    // this.authClient.send('get_user' , )
     
  }
}
