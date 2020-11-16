import {NoteModel} from './NoteModel';

export class NoteResult {

  noteArr: NoteModel[] = [];

  fncResult(): NoteModel[] {
    const stData = localStorage.getItem('data');
    if (stData != null){
      this.noteArr = [];
      const objArr = JSON.parse(stData);
      objArr.forEach(item => {
        return this.noteArr.push(item);
      });
    }
    return this.noteArr;
  }
}
