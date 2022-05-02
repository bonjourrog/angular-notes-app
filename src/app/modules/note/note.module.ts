import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { Route, RouterModule } from '@angular/router';

const noteRoutes:Route[]=[
  {
    path:'',
    component:NoteComponent
  }
]

@NgModule({
  declarations: [
    NoteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(noteRoutes)
  ]
})
export class NoteModule { }
