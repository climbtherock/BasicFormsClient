import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingComponent } from './meeting.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { MeetingDetailComponent } from './meeting-detail/meeting-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MeetingListComponent,
  },
  {
    path: 'new',
    component: MeetingDetailComponent
  },
  {
    path: ':id',
    component: MeetingDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
