import { Injectable } from "@nestjs/common";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) { }
    index(): Promise<Todo[]> {
        return this.todoRepository.find()
    }

    create(todoBody: Todo) {
        return this.todoRepository.save(todoBody)
    }

    update(id, todo: Todo) {
        return this.todoRepository.update(id, todo)
    }

    delete(id) {
        this.todoRepository.delete(id)
    }
}