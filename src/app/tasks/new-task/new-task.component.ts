import { Component, EventEmitter, inject, Input, Output,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() add = new EventEmitter<newTaskData>()
  @Output() cancel = new EventEmitter<void>()
  @Input({required:true})  userId!:string

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

 private taskSerive = inject(TasksService)
  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.cancel.emit();
    this.taskSerive.addTask({
      tilte: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    },this.userId)
    this.cancel.emit();
  }

}
