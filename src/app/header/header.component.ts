import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  testform = new FormGroup({
    lable: new FormControl(''),
    textBody: new FormControl(''),
    time: new FormControl()
  });
  SearchForm = new FormGroup({
    search: new FormControl('')
  });

  @Input() NotesAppsList:any;
  @Input() index:any;

  constructor() { }

  ngOnInit(): void {
  }

  Submit(testform){
    this.testform.patchValue({ 'time' : (new Date()).getTime() });
    console.warn(this.testform.value);
    this.NotesAppsList.push(this.testform.value);
    testform.reset();
    //localStorage.setItem('NotesData', JSON.stringify(this.testform.value));
  }
  SearchResult(SearchForm){
    console.warn(this.SearchForm.value);
  }
  deleteEvent(){
    console.warn(this.index);
    this.NotesAppsList.splice(this.index,1);
  }

}
