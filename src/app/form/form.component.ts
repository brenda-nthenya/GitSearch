import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Search } from '../search';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newSearch = new Search('');
  @Output() searchString = new EventEmitter<Search>();
  constructor() {}

  submitParameter(): void {
    this.searchString.emit(this.newSearch);
    console.log(this.newSearch);
    this.newSearch = new Search('');
  }

  ngOnInit(): void {}
}