import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Provide_Tokens } from 'src/CommonModule/Common-mod.module';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { statusEnum } from './entities/statusEnum';
import { TodoModel } from './entities/TodoModel.entity';

@Injectable() 
export class TodoService {
    @Inject(Provide_Tokens) uuid: () => number;
    todos: TodoModel[] = [];

    findAll(): TodoModel[] {
        return this.todos;
      }

    create(todo: AddTodoDto): TodoModel {
        const newTodo: TodoModel = {
          id: this.uuid(),
          name: todo.name,
          description: todo.description,
          createdAt: new Date(),
          status: statusEnum.EnAttente,
        };
        this.todos.push(newTodo);
        return this.todos[this.todos.length - 1];
      }
    findTodoById(id: number) {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
          throw new NotFoundException(`Todo with id ${id} not found`);
           }
        return todo;
         }
           
    removeTodoById(id: number) {
            const todo = this.findTodoById(id);
            this.todos = this.todos.filter((todo) => todo.id === id);
            return todo;
          }
    updateTodoById(id: number, newTodo: UpdateTodoDto) {
            const todo = this.findTodoById(id);
            const index = this.todos.findIndex((todo) => todo.id === id);
            this.todos[index] = { ...todo, ...newTodo };
            return this.todos[index];
          }
}
