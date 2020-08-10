import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit {
  formValue: any = [];
  NoteBodyText: string ='';
  itemIndex: any;

  constructor() { }

  @Output() EmmitIndex = new EventEmitter<any>();
  @Input() NotesAppsList:any;

  ngOnInit(): void {
    this.getNoteList();
  }
  getNoteList(){
    this.formValue = this.NotesAppsList;
  }
  itemSelect(i){
    this.itemIndex = i;
    this.EmmitIndex.emit(this.itemIndex);
    this.NoteBodyText = this.NotesAppsList[i]["textBody"];

  }
  textBodyChanged(){
    this.NotesAppsList[this.itemIndex]["textBody"] = this.NoteBodyText;
    this.formValue = this.NotesAppsList;
  }

}
