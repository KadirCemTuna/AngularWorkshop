import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// page import class
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NoteComponent} from './note/note.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dashboard/:id', component: DashboardComponent
  },
  {path: 'note', component: NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
