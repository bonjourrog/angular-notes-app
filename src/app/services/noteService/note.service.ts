import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from 'src/app/models/noteModule';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  // getAll():Observable<Note[]>{
  //   return this._httpClient.get<Note[]>('assets/data/noteData.json');
  // }

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
