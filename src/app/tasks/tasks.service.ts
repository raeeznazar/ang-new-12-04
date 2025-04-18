import { Injectable } from "@angular/core"
import { newTaskData } from "./task/task.model"

@Injectable({providedIn:'root'})
export class TasksService {
   private tasks = [
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
        },
        {
          id:'t3',
          userId:'u3',
          title:'master react',
          summary: "lorewrwerewrv feff fwefwef fwefwfwef",
          dueDate: '2025-12-31'
        }
      ]

      getUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId === userId)
      }

      addTask(taskData:newTaskData,userId:string){
        return this.tasks.push({
            id:new Date().getTime().toString(),
            userId : userId,
            title:taskData.tilte,
            summary:taskData.summary,
            dueDate:taskData.date
          })
      }

      removeTask(id:string){
        return  this.tasks = this.tasks.filter((task)=>task.id !== id)
      }
}