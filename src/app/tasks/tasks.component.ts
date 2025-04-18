import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() userId!:string
  @Input() name!:string

  tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'master angular',
      summary: "lorewrwerewrv feff fwefwef fwefwfwef",
      dueDate: '2025-12-31'
    },
    {
      id:'t2',
      userId:'u2',
      title:'master react',
      summary: "lorewrwerewrv feff fwefwef fwefwfwef",
      dueDate: '2025-12-31'
    }
  ]

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
