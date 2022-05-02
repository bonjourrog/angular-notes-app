import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/noteModule';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newNoteForm: boolean = false;
  noNotesMessage: boolean = true;
  notes:Note[]=[];
  
  constructor(
    private noteService:NoteService
  ) { }

  ngOnInit(): void {
    this.getNotes()
  }

  newNotes(event:any){
    this.notes = event;
    this.getNotes();
  }

  deleteNote(noteTitle:string){
    console.log(noteTitle);
    const newArray = this.notes.filter(note => note.title !== noteTitle);
    this.noteService.saveNote(newArray);
    this.getNotes()
    
  }

  getNotes(){
    this.notes = this.noteService.getAll()
    if(this.notes.length > 0){
      this.noNotesMessage = false;
      return;
    }
    this.noNotesMessage = true;
  }

  closeNote(event:boolean){
    this.newNoteForm = event;
  }
}
