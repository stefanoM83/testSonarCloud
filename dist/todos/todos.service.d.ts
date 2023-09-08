import { Todos } from './todos.entity';
import { Repository } from 'typeorm';
export declare class TodosService {
    private repo;
    constructor(repo: Repository<Todos>);
    createTodo(body: any): Promise<Todos[]>;
    find(): Promise<Todos[]>;
    findById(id: number): Promise<Todos>;
    update(id: number): Promise<{
        isCompleted: boolean;
        id: number;
        todo: string;
        description: string;
    } & Todos>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
