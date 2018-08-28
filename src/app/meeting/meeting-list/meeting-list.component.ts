import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCard, MatTable, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MeetingService } from '../meeting.service';

export interface Meeting {
  name: string;
  dateCreated: Date;
  objective: string;
  date: Date;
}

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  displayedColumns: string[] = ['date', 'name'];
  dataSource = new MatTableDataSource<any>([]);
  // meetings: Meeting[] = [
  //   { name: 'test1', dateCreated: new Date() },
  //   { name: 'test2', dateCreated: new Date() },
  //   { name: 'test3', dateCreated: new Date() },
  //   { name: 'test4', dateCreated: new Date() },
  //   { name: 'test5', dateCreated: new Date() },
  //   { name: 'test6', dateCreated: new Date() },
  //   { name: 'test7', dateCreated: new Date() },
  //   { name: 'test8', dateCreated: new Date() },
  //   { name: 'test9', dateCreated: new Date() },
  //   { name: 'test10', dateCreated: new Date() },
  //   { name: 'test11', dateCreated: new Date() } ];

    @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private router: Router,
    private meetingService: MeetingService) { }

  ngOnInit() {
    // this.dataSource.data = this.meetings;
    this.dataSource.paginator = this.paginator;
    this.meetingService.getMeetings().subscribe(meetings => {
      this.dataSource.data = meetings;
    });

  }

  addMeeting() {
    this.router.navigateByUrl('meeting/new');
  }

}
