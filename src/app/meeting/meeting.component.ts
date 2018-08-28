import { Component, OnInit,ViewChild } from '@angular/core';
import { MatCard, MatTable, MatTableDataSource, MatPaginator } from '@angular/material';

export interface Meeting {
  name: string;
  dateCreated: Date;
}

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date'];
  dataSource = new MatTableDataSource<Meeting>([]);
  meetings: Meeting[] = [
    { name: 'test1', dateCreated: new Date() }, 
    { name: 'test2', dateCreated: new Date() }, 
    { name: 'test3', dateCreated: new Date() }, 
    { name: 'test4', dateCreated: new Date() }, 
    { name: 'test5', dateCreated: new Date() }, 
    { name: 'test6', dateCreated: new Date() }, 
    { name: 'test7', dateCreated: new Date() }, 
    { name: 'test8', dateCreated: new Date() }, 
    { name: 'test9', dateCreated: new Date() }, 
    { name: 'test10', dateCreated: new Date() },
    { name: 'test11', dateCreated: new Date() } ];

    @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.data = this.meetings;
    this.dataSource.paginator = this.paginator;
  }

}
