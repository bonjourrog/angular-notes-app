import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { Note } from 'src/app/models/noteModule';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes:Note[] = [];
  note: Note = {title:'', content:''};
  notetoReplace: Note = {title:'', content:''};
  modifyName:boolean = false;
  formGroup:FormGroup = new FormGroup({});

  constructor(
    private _route: ActivatedRoute,
    private noteService:NoteService,
    private _fb: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this._route.params.subscribe((params:Params)=>{
      const title = params['title'];
      this.notes = this.noteService.getAll();      
      this.note = this.notes.find(note=>note.title === title) as Note;
      this.notetoReplace = {...this.note};
      this.formGroup = this._fb.group({
        title:[this.note.title,[Validators.required]],
        content:[this.note.content,[Validators.required]]
      })  
    })
  }

  modifyNote(){
    this.notes = this.noteService.getAll();
    let noteIndex = this.notes.findIndex(note=>note.title === this.notetoReplace.title ? true : false)
    this.notes.splice(noteIndex, 1, this.note);
    this.noteService.saveNote(this.notes);
    this.snackBar.open('Nota guardada', '',{
      duration: 3000,
      horizontalPosition:'end',
      verticalPosition:'top',
      panelClass:['bg-green-600']
    })
    this.modifyName = false;
  }

}
