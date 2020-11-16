import {Component, OnInit} from '@angular/core';
import {NoteResult} from '../model/NoteResult';
import {NoteModel} from '../model/NoteModel';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent extends NoteResult implements OnInit {
  title = '';
  detail = '';
  date = '';
  noteArr = this.fncResult();

  constructor() {
  super();
  }

  ngOnInit(): void {
    console.log(JSON.stringify(this.noteArr));
  }

  fncNoteSave(): void {
    const oldData = localStorage.getItem('data');
    const item = {title: this.title, detail: this.detail, date: this.date};
    if (oldData == null){
      // first user
      const stObject = JSON.stringify([item]);
      localStorage.setItem('data', stObject);
    }else {
      // second add
      const oldArr = JSON.parse(oldData);
      oldArr.push(item);
      localStorage.setItem('data', JSON.stringify(oldArr));
    }

    this.fncResult();
  }

  fncNoteDelete(id: number): void {
    console.log('id: ' + id);

    const oldData = localStorage.getItem('data');
    if (oldData != null){
      const oldArr = JSON.parse(oldData);
      oldArr.splice(id, 1);
      localStorage.setItem('data', JSON.stringify(oldArr));
    }
    this.fncResult();
  }

}
