import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {private taskSerive = inject(TasksService)
@Input({required:true}) task!:task

onComplete(){
  this.taskSerive.removeTask(this.task.id)
}
}
