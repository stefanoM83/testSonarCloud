import { TodosService } from './todos.service';
import { DeleteResult } from 'typeorm';
export declare class TodosController {
    private todoService;
    constructor(todoService: TodosService);
    createTodo(body: any): Promise<import("./todos.entity").Todos[]>;
    findTodos(): Promise<import("./todos.entity").Todos[]>;
    findById(id: string): Promise<import("./todos.entity").Todos>;
    updateTodoStatus(id: string): Promise<{
        isCompleted: boolean;
        id: number;
        todo: string;
        description: string;
    } & import("./todos.entity").Todos>;
    deleteTodo(id: string): Promise<DeleteResult>;
}
