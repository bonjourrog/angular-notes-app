import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    SharedModule,
    RouterModule.forChild(noteRoutes)
  ]
})
export class NoteModule { }
