import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  previousSearch: string;

  animatePlop = false;

  showSearch = true;

  @Output()
  searchChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.previousSearch = '';
  }

  searchKeyup(search: string) {
    let change = 0;
    if (search.length > this.previousSearch.length) {
      change = 1;
    } else if (search.length < this.previousSearch.length) {
      change = -1;
    }
    this.previousSearch = search;
    if (change !== 0) {
      this.searchChange.emit({search, change});
    }
  }

  plop() {
    this.animatePlop = true;
    setTimeout(() => {
      this.animatePlop = false;
    }, 110);
  }

  reset() {
    this.showSearch = false;
    setTimeout(() => {
      this.showSearch = true;
    });
  }

}
