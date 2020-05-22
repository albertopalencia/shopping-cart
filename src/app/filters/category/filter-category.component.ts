import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'filter-category',
  templateUrl: 'filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent implements OnInit {

  //#region properties 
  
  @Input()
  categories: Category[];

  @Input()
  customFilters: any[];

  @Input()
  priceFilters: any[];


  slideShown = false;

  showFilters = true;

  //#endregion

  //#region events

  @Output()
  filterChange = new EventEmitter<any>();

  //#endregion

  constructor(){}

  ngOnInit() {}


  inputChange($event, filter, type) {
    const change = $event.target.checked ? 1 : -1;
    this.filterChange.emit({
      type: type,
      filter: filter,
      isChecked: $event.target.checked,
      change: change
    });
  }

}
