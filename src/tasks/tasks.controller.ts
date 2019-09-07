import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
// import { CreateTaskDto } from './DTO/create-task.dto';
// import { TaskInterface } from './interfaces/task';

import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

  constructor(private taskService : TasksService){}

  @Get(':id')
  get(@Param() params){
    return this.taskService.getTask(params.id);
  }

  @Post()
  create(@Body() task: Task) {
    return this.taskService.createTask(task);
  }

  @Put()
  update(@Body() task: Task) {
    return this.taskService.updateTask(task);
  }

  @Delete(':id')
  deleteTask(@Param() params) {
    return this.taskService.deleteTask(params.id);
  }

  // @Get(':id')
  // getOneTask(@Param('id') id:string) {
  //   return this.service.getOneTask(parseInt(id));
  // }
  //
  // @Post()
  // createTask(@Body() task: CreateTaskDto): string{
  //
  //   console.log(task);
  //
  //   let create = "Create a task";
  //   return create;
  // }
  //
  // @Put(':id')
  // updateTask(@Body() task: CreateTaskDto, @Param('id') id:number): string {
  //
  //   console.log(task, id);
  //   let update ="Actualizar tarea";
  //   return update;
  // }
  //
  // @Delete(':id')
  // deleteTask(@Param('id') id:number): string {
  //   console.log(id);
  //
  //   let deleting =  "Eliminar tarea:" + `${id}`;
  //   return deleting;
  // }

}
