import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // blocking code 
  @Get('blocking')
  blocking() {
    return this.appService.blocking()
  }

  // Non blocking code
  @Get('nonBlocking')
  async nonBlocking() {
    return this.appService.nonBlocking()
  }
}
