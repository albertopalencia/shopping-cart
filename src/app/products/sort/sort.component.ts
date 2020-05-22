import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'sort-products',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {

  @Input()
  filters: any[];

  @Output()
  sortChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectChange($event) {
    this.sortChange.emit($event.target.value);
  }
}
