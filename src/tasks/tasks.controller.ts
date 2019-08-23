import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './DTO/create-task.dto';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task';

@Controller('tasks')
export class TasksController {

  constructor(private taskService : TasksService){}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Get(':id')
  getOneTask(@Param('id') id:string) {
    return this.taskService.getOneTask(parseInt(id));
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string{

    console.log(task);

    let create = "Create a task";
    return create;
  }

  @Put(':id')
  updateTask(@Body() task: CreateTaskDto, @Param('id') id:number): string {

    console.log(task, id);
    let update ="Actualizar tarea";
    return update;
  }

  @Delete(':id')
  deleteTask(@Param('id') id:number): string {
    console.log(id);

    let deleting =  "Eliminar tarea:" + `${id}`;
    return deleting;
  }

}
