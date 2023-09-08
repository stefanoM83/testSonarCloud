import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TodosService } from './todos.service';
import { DeleteResult } from 'typeorm';

@Controller('todos')
export class TodosController {

    constructor(private todoService: TodosService) { }

    // CREATE
    @Post('/new')
    createTodo(@Body() body: any) {
        return this.todoService.createTodo(body);
    }

    // FIND
    @Get('/all')
    findTodos() {
        return this.todoService.find();
    }

    // FIND BY ID
    @Get('/:id')
    findById(@Param('id') id: string) {
        return this.todoService.findById(parseInt(id));
    }

    // UPDATE
    @Patch('/:id')
    updateTodoStatus(@Param('id') id: string) {
        return this.todoService.update(parseInt(id));
    }

    // DELETE
    @Delete('/:id')
    deleteTodo(@Param('id') id: string) {
        return this.todoService.delete(parseInt(id));
    }
}
