import { Component, OnInit } from '@angular/core';
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
  });
  SearchForm = new FormGroup({
    search: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  Submit(testform){
    console.warn(this.testform.value);
    localStorage.setItem('NotesData', JSON.stringify(this.testform.value));
  }
  SearchResult(SearchForm){
    console.warn(this.SearchForm.value);
  }

}
