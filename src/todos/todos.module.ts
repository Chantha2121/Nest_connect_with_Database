import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { TodoController } from "./todos.controller";
import { TodoService } from "./todos.service";

@Module({
    imports:[TypeOrmModule.forFeature([Todo])],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {}