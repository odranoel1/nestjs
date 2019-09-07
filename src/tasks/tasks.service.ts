import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

// import { TaskInterface } from './interfaces/task';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}


  async getTasks(task: Task): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async getTask(_id: number): Promise<Task[]>{
    return await this.taskRepository.find({
        select: ["name", "description", "isPublished"],
        where: [{ "id": _id }]
    });
  }

  async updateTask(task: Task) {
    this.taskRepository.save(task);
  }

  async createTask(task: Task) {
    this.taskRepository.save(task);
  }

  async deleteTask(task: Task) {
    this.taskRepository.delete(task);
  }

  // public tasks: TaskInterface[] = [
  //   {
  //     id: 1,
  //     title: 'Hacer tarea',
  //     description: 'Antes del viernes',
  //     done: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Hacer tarea2',
  //     description: 'Antes del viernes',
  //     done: true
  //   },
  //   {
  //     id: 3,
  //     title: 'Hacer tarea3',
  //     description: 'Antes del viernes',
  //     done: true
  //   },
  // ];

  // getTasks(): TaskInterface[]{
  //   return this.tasks;
  // }
  //
  // getOneTask(id: number): TaskInterface {
  //   return this.tasks.find(task => task.id === id);
  // }

}
