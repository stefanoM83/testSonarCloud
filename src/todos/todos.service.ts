import { Injectable, NotFoundException } from '@nestjs/common';
import { Todos } from './todos.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
    constructor(@InjectRepository(Todos) private repo: Repository<Todos>) { }


    createTodo(body: any) {
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }

    find() {
        return this.repo.find();
    }

    findById(id: number) {
        if (!id) return null;
        return this.repo.findOneBy({ id });
    }


    async update(id: number) {
        const todo = await this.repo.findOneBy({ id });
        if (!todo) {
            throw new NotFoundException('Todo NOT FOUND');
        }
        let updateCompletion = !todo.isCompleted;
        return this.repo.save({...todo, isCompleted: updateCompletion});
    }

    async delete(id: number) {
        const todo = await this.repo.findOneBy({ id });
        if (!todo) {
            throw new NotFoundException('TODO not found!');
        }
        return this.repo.delete(todo);
    }
}
