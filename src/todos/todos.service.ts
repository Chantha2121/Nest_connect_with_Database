import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateDto } from "./dtos/create-todo.dto";

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}
    async create(dto:CreateDto){
        const todo = this.todoRepository.create(dto)
        return await this.todoRepository.save(todo)
    }

    findMany(){
        return this.todoRepository.find()
    }

    async update(id: number, dto: CreateDto){
        const todo = await this.todoRepository.findOne({where: {id}})
        Object.assign( todo,dto)
        return await this.todoRepository.save(todo)
    }
}