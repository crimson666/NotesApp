import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrls: ['./note-container.component.css']
})
export class NoteContainerComponent implements OnInit {
  formValue: any = [];
  constructor() { }

  NotesAppsList = [
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
    {
      "lable": "My Frist Text",
      "textBody": "Frist Bla bla bla bla"
    },
  ];

  ngOnInit(): void {
    //this.formValue = JSON.parse(localStorage.getItem('NotesData'));
    this.getNoteList();
  }
  getNoteList(){
    this.formValue = this.NotesAppsList;
  }
  


}
