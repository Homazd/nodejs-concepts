import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  blocking() {
    const now = new Date().getTime();
    while (new Date().getTime() < now + 10000) {

    } return {}
  }

  async nonBlocking() {
    return new Promise(async (resolve) => {
      setTimeout(() => {
        resolve({});
      }, 10000)
    })
  }
}
