import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { NotesComponent } from './notes/notes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { OldNotesComponent } from './old-notes/old-notes.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NoteComponent } from './notes/note/note.component';
import { NoteTextFilterPipe } from './shared/note-text-filter.pipe';

const appRoutes: Routes=[
  {
  path:"notes",
  component: NotesComponent
  },
  {
    path:"notes",
    component:NotesComponent,
    pathMatch:"full"
  },
  {
    path:"oldNotes",
    component:OldNotesComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotesComponent,
    NotFoundComponent,
    OldNotesComponent,
    NoteComponent,
    NoteTextFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
