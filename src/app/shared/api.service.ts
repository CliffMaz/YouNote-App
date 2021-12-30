import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notebook} from "../notes/model/Notebook";
import {Note} from "../notes/model/Note";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL="https://younotes-app.herokuapp.com"
  private All_URL=`${this.BASE_URL}\\notebooks\\all`
  private CREATE_UPDATE_NOTEBOOK_URL=`${this.BASE_URL}\\notebooks\\save`;
  private DELETE_NOTEBOOK_URL=`${this.BASE_URL}\\notebooks\\delete\\`
  private ALL_NOTES_URL=`${this.BASE_URL}\\notes\\all`
  private NOTES_BY_NOTEBOOK_URL=`${this.BASE_URL}\\notes\\byNotebook\\`
  private DELETE_NOTE_URL=`${this.BASE_URL}\\notes\\delete\\`
  private CREATE_UPDATE_NOTE_URL=`${this.BASE_URL}\\notes\\save` ;
 // private TEST_URL=`${this.BASE_URL}\\notes\\test` ;

  constructor(private httpClient: HttpClient) { }


  getAllNotebooks(): Observable<Notebook[]>{

    return this.httpClient.get<Notebook[]>(this.All_URL);
}


  postNotebook(notebook: Notebook) : Observable<Notebook> {
    return this.httpClient.post<Notebook>(this.CREATE_UPDATE_NOTEBOOK_URL,notebook);
  }

  deleteNotebook(id: string) : Observable<any>{

    return this.httpClient.delete(this.DELETE_NOTEBOOK_URL+id);
  }

  deleteNote(id: string) : Observable<any>{

    return this.httpClient.delete(this.DELETE_NOTE_URL+id);
  }

  /*getTest() : Observable<string>{
    return this.httpClient.get<string>(this.TEST_URL);
  }*/
  getAllNotes() : Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.ALL_NOTES_URL);
  }

  getNotesByNotebook(id: string) : Observable<Note[]>{
    return this.httpClient.get<Note[]>(this.NOTES_BY_NOTEBOOK_URL+id);
  }

  postNote(note: Note) : Observable<Note>{
    return this.httpClient.post<Note>(this.CREATE_UPDATE_NOTE_URL,note);
  }
}
