import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoModule } from "./todo/todo.module";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [TypeOrmModule.forRoot({
        database: "todo.db",
        type: "sqlite",
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true
    }), TodoModule]
})
export class AppModule { }