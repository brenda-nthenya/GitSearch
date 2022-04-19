import { Component, Input, OnInit } from '@angular/core';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  @Input() repos: Repos;
  constructor() {}

  ngOnInit(): void {}
}