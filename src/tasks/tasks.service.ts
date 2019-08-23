import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task';

@Injectable()
export class TasksService {

  public tasks: Task[] = [
    {
      id: 1,
      title: 'Hacer tarea',
      description: 'Antes del viernes',
      done: true
    },
    {
      id: 2,
      title: 'Hacer tarea2',
      description: 'Antes del viernes',
      done: true
    },
    {
      id: 3,
      title: 'Hacer tarea3',
      description: 'Antes del viernes',
      done: true
    },
  ];

  getTasks(): Task[]{
    return this.tasks;
  }

  getOneTask(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

}
