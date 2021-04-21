import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CcActivityListComponent } from './components/cc-activity-list/cc-activity-list.component';
import { CcActivityDetailsComponent } from './components/cc-activity-details/cc-activity-details.component';

const routes: Routes = [
  {path: '', redirectTo:'cc-activity',pathMatch: 'full'},
  {path: 'cc-activity', component : CcActivityListComponent },
  {path: 'cc-activity/:id', component : CcActivityDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
