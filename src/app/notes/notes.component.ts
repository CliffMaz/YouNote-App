import { Component, OnInit } from '@angular/core';
import {Notebook} from "./model/Notebook";
import {ApiService} from "../shared/api.service";
import {Note} from "./model/Note";


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notebooks: Notebook[]=[];
  notes: Note[]=[];
  searchText: string;
  selectedNotebook: any=undefined;
  selectedText: string="All Notes";
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNotebooks();
    this.getAllNotes();

  }

  public getAllNotebooks(){

      this.apiService.getAllNotebooks().subscribe(
        res =>{
          this.notebooks=res;
        },
        error =>{
          alert("an error occurred while fetching data")
        }
      )
  }


  createNote() {
    let newNote:Note = {
      noteId:"",
      title:"Add title here",
      body:"Add note here...",
      notebook: this.notebooks[this.selectedNotebook]
    }

    this.apiService.postNote(newNote).subscribe(
      res=>{
        this.notes.push(res);
      },
      error => {
        alert("An error has occurred while saving the notebook");
      }
    )


  }

  updateNote(updatedNote: Note) {

    this.apiService.postNote(updatedNote).subscribe(

      res=>{

      },
      error => {
        alert("An error has occurred while updating the notebook");
      })

  }


  createNotebook() {
    let newNotebook:Notebook = {
      notebookId:"",
      name:"new Notebook"
    }
    this.apiService.postNotebook(newNotebook).subscribe(
      res=>{
        this.notebooks.push(res);
      },
      error => {
        alert("An error has occurred while saving the notebook");
      }
    )


  }

  updateNotebook(updatedNotebook: Notebook) {

    this.apiService.postNotebook(updatedNotebook).subscribe(

      res=>{

      },
      error => {
        alert("An error has occurred while updating the notebook");
      })

  }


  testMethod() {

    this.apiService.getTest().subscribe(

      res=>{
        alert(res);

      },
      error => {
        alert("test didnt work");
      })

  }
  getAllNotes(){

    this.apiService.getAllNotes().subscribe(
      res =>{
        this.notes=res;
      },
      error => {
        alert("An error occurred while fetching notes")
      }
    )

  }

  getNotesByNotebook(notebook: Notebook){

    this.apiService.getNotesByNotebook(notebook.notebookId).subscribe(
      res => {
        this.notes=res;
      },
      error => {
        alert("An error occurred while fetching notes")
      }
    )
  }
  deleteNotebook(notebook: Notebook) {

    if(confirm("Are you sure you want to delete this notebook"))
          this.apiService.deleteNotebook(notebook.notebookId).subscribe(
            res=>{

              let index=this.notebooks.indexOf(notebook);

              this.notebooks.splice(index,1)
            },
            err=>{
              alert("Could not delete");
            }
          );


  }

  deleteNote(note: Note) {

    if(confirm("Are you sure you want to delete this note"))
      this.apiService.deleteNote(note.noteId).subscribe(
        res=>{

          let index=this.notes.indexOf(note);

          this.notes.splice(index,1)
        },
        err=>{
          alert("Could not delete");
        }
      );


  }

  selectNotebook(notebook: Notebook) {
    this.selectedNotebook=this.notebooks.indexOf(notebook);
    this.selectedText= this.notebooks[this.selectedNotebook].name;

  }

  selectNotebookAll() {
    this.selectedNotebook =undefined;
    this.selectedText="All Notes"

  }
}
