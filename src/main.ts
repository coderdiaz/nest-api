import "dotenv/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const APP_PORT: number = parseInt(process.env.PORT, 10) || 3000;

  const app = NestFactory.create(AppModule);
  (await app).listen(APP_PORT);
}

bootstrap();
