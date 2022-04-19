
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { DisplayRepositoriesComponent } from './display-repositories/display-repositories.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user', component: DisplayProfileComponent },
  { path: 'repos', component: DisplayRepositoriesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}