import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service/user.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css'],
})
export class DisplayProfileComponent implements OnInit {
  user!: User;
  repos!: Repos[];

  getUser(search: any): void {
    this.userservice.getGithubUser(search.parameters);
    this.user = this.userservice.user;
    this.repos = this.userservice.repos;
  }

  constructor(private userservice: UserService) {}

  ngOnInit(): void {
    this.userservice.getGithubUser('brenda-nthenya');
    this.user = this.userservice.user;
    this.repos = this.userservice.repos;
  }
}