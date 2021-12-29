import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Note} from "../notes/model/Note";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
