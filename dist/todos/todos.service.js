"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const todos_entity_1 = require("./todos.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let TodosService = class TodosService {
    constructor(repo) {
        this.repo = repo;
    }
    createTodo(body) {
        const todo = this.repo.create(body);
        return this.repo.save(todo);
    }
    find() {
        return this.repo.find();
    }
    findById(id) {
        if (!id)
            return null;
        return this.repo.findOneBy({ id });
    }
    async update(id) {
        const todo = await this.repo.findOneBy({ id });
        if (!todo) {
            throw new common_1.NotFoundException('Todo NOT FOUND');
        }
        let updateCompletion = !todo.isCompleted;
        return this.repo.save({ ...todo, isCompleted: updateCompletion });
    }
    async delete(id) {
        const todo = await this.repo.findOneBy({ id });
        if (!todo) {
            throw new common_1.NotFoundException('TODO not found!');
        }
        return this.repo.delete(todo);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(todos_entity_1.Todos)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TodosService);
//# sourceMappingURL=todos.service.js.map