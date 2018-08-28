import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MeetingComponent } from './meeting.component';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingDetailComponent } from './meeting-detail/meeting-detail.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MeetingRoutingModule
  ],
  declarations: [MeetingComponent, MeetingDetailComponent, MeetingListComponent]
})
export class MeetingModule { }
