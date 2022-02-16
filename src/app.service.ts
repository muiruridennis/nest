import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
export class Animal {
  bark():string {
    return 'wooh! wooh! woof!';
  }
}
