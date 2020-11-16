import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  title = '';
  detail = '';
  date = '';

  constructor() {
  }

  ngOnInit(): void {
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

  }

}
