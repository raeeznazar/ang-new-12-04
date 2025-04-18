import { Component, computed, EventEmitter, Input,input, Output,output } from '@angular/core';

interface User {
  id:string, avatar:string, name:string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 @Input({required:true}) user!:User;
 @Output() select = new EventEmitter<string>();
  // select = output<string>();


 get imagePath(){
    return 'assets/' + this.user.avatar
 }

//we can use signals to accept input 
//  avatar = input.required<string>();
//  name = input.required<string>();

//  imagePath = computed(()=>{
//   return 'assets/' + this.avatar
//  })

onSelectUser(){
  this.select.emit(this.user.id);
}
 





  
}
