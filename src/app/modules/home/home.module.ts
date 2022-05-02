import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { Route, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewNoteComponent } from './new-note/new-note.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';

const homeRoutes: Route[] = [
  {
    path:'',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    NewNoteComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatTooltipModule,
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
