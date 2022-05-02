import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutLongTextPipe } from './pipes/cut-long-text.pipe';



@NgModule({
  declarations: [
    CutLongTextPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CutLongTextPipe
  ]
})
export class SharedModule { }
