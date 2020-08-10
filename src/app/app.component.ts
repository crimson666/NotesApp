import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotesApp';
  index:any = 0;
  NotesAppsList = [
    {
      "lable": "Note Sl 1",
      "textBody": "First Bla bla bla bla",
      "time": 1597065006156
    },
    {
      "lable": "Note Sl 2",
      "textBody": "Second Bla bla bla bla",
      "time": 1597065006156
    },
    {
      "lable": "Note Sl 3",
      "textBody": "Third Bla bla bla bla",
      "time": 1597065006156
    },
    {
      "lable": "Note Sl 4",
      "textBody": "Fourth Bla bla bla bla",
      "time": 1597065006156
    },
    {
      "lable": "Note Sl 5",
      "textBody": "Fifth Bla bla bla bla",
      "time": 1597065006156
    },
    {
      "lable": "Note Sl 6",
      "textBody": "Sixth Bla bla bla bla",
      "time": 1597065006156
    },

  ];
  reciveIndex($event){
    this.index = $event;
  }
}
