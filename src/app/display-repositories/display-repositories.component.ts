import { Component, OnInit } from '@angular/core';
import { Repos } from '../repos';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-display-repositories',
  templateUrl: './display-repositories.component.html',
  styleUrls: ['./display-repositories.component.css'],
})
export class DisplayRepositoriesComponent implements OnInit {
  // repos: Repos[] | undefined;
  repos = <any>{};

  searchParameters: any;
  constructor(private repoService: UserService) {}

  searchRepos(search: any) {
    this.searchParameters = search.parameters;
    this.repoService.getRepos(search.parameters);
    this.repos = this.repoService.repoSearch;
  }

  ngOnInit(): void {}
}