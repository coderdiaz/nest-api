import { Controller, Get } from "@nestjs/common";

interface IGetHelloResponse {
  code: number;
  data: string;
}

@Controller()
export class AppController {
  @Get()
  getHello(): IGetHelloResponse {
    return {
      code: 200,
      data: `Hello World`,
    };
  }
}
