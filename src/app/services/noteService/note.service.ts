import { Injectable } from '@angular/core';
import { Note } from 'src/app/models/noteModule';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
  ) { }

  getAll():Note[]{
    const notes = localStorage.getItem('notes');
    if(notes === null){
      localStorage.setItem('notes', JSON.stringify([]));
      return JSON.parse(localStorage.getItem('notes') || '{}');
    }
    return JSON.parse(notes);
  }

  saveNote(notes:Note[]){
    localStorage.setItem('notes', JSON.stringify(notes));
  }
}
