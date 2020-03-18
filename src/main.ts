import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = NestFactory.create(AppModule);
  (await app).listen(3000);
}

bootstrap();
