import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Todo } from "./todo.entity";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }

    @Get('')
    index(): Promise<Todo[]> {
        return this.todoService.index()
    }

    @Post('create')
    create(@Body() todoBody: Todo) {
        return this.todoService.create(todoBody)
    }

    @Put('update/:id')
    update(@Param('id') id, @Body() todoBody: Todo) {
        return this.todoService.update(parseInt(id), todoBody)
    }

    @Delete('delete/:id')
    delete(@Param('id') id) {
        return this.todoService.delete(id)
    }
}