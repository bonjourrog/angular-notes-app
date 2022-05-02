import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/models/noteModule';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styles: [
  ]
})
export class NewNoteComponent implements OnInit {
  noteForm: FormGroup = new FormGroup({});
  @Input() notes:Note[] = [];
  @Output() newNotes = new EventEmitter();
  @Output() closeNote = new EventEmitter();

  constructor(
    private noteService:NoteService,
    private formBulder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }
  
  ngOnInit(): void {
    this.noteForm = this.formBulder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      content:['', [Validators.required, Validators.minLength(1)]],
    });
  }

  saveNote(){
    if(!this.noteForm.valid){
      const sb = this.showSnackBar('Los campos son obligatorios', 'bg-blue-600')
      sb.onAction().subscribe(()=>{
        sb.dismiss()
      })
      return
    }
    const noteExist:Note[] = this.notes.filter(({title})=> title === this.noteForm.controls['title'].value);
    if(noteExist.length > 0){
      this.showSnackBar("Esta nota ya existe, elige otro nombre", 'bg-red-600');
      return;
    }
    
    this.notes.push(this.noteForm.getRawValue());
    this.noteService.saveNote(this.notes);
    this.newNotes.emit(this.notes);
    this.noteForm.reset();
    this.showSnackBar("Nota agregada correctamente", 'bg-green-600');
  }

  closeNoteForm(){
    this.closeNote.emit(false);
  }

  showSnackBar(message:string, _class:string){
    return this.snackBar.open(message, '', {
      duration: 3000,
      horizontalPosition:'end',
      verticalPosition:'top',
      panelClass:[_class]
    })
  }
}
