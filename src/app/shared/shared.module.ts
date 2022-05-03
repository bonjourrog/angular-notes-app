import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutLongTextPipe } from './pipes/cut-long-text.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CutLongTextPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
  ],
  exports:[
    CutLongTextPipe,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
