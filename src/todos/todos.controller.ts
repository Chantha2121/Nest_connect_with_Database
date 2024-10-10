import { Controller, Post, Body, Get } from '@nestjs/common';
import { TodoService } from './todos.service';
import { CreateDto } from './dtos/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async createTodo(@Body() createTodoDto: CreateDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findMany(){
    return this.todoService.findMany();
  }
}
