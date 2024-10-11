import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
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

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto : CreateDto){
    return this.todoService.update(id, updateDto)
  }

  @Delete(':id')
  delete(@Param('id') id: number){
    return this.todoService.delete(id);
  }
}
