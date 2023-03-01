import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoModel } from './entities/TodoModel.entity';
import { AddTodoDto } from './dto/add-todo.dto';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  findAll(): TodoModel[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: AddTodoDto): TodoModel {
    return this.todoService.create(todo);
  }

  @Get(':id')
  findTodoById(@Param('id') id: number): TodoModel {
    return <TodoModel>this.todoService.findTodoById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): TodoModel {
    return <TodoModel>this.todoService.removeTodoById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() newTodo: UpdateTodoDto): TodoModel {
    return <TodoModel>this.todoService.updateTodoById(id, newTodo);
  }
}
