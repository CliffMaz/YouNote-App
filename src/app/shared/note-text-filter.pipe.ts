import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../notes/model/Note";

@Pipe({
  name: 'noteTextFilter'
})
export class NoteTextFilterPipe implements PipeTransform {

  transform(notes: Note[], searchText: string): Note[] {
    if(searchText==null){
      return notes;
    }
    return notes.filter(n => n.title.includes(searchText) || n.body.includes(searchText));
  }

}
