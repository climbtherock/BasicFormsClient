import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatFormField } from '@angular/material';
import { faCoffee, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MeetingService } from '../meeting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: ['./meeting-detail.component.css']
})
export class MeetingDetailComponent implements OnInit {

  agendaItemControl: FormControl = new FormControl('');
  faCoffee = faCoffee;
  faPlusCircle = faPlusCircle;
  formGroup = new FormGroup({});
  addItemActive = false;
  agendaItems: any[] = ['item'];

  constructor(
    private meetingService: MeetingService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.meetingService.getMeeting(+params.id).subscribe(meeting => {
        console.log(meeting);
      });
    });
  }

  createForm() {
    // this.formGroup = this.formBuilder.group({
    //   name: '',
    //   date: '',
    //   notes: ''
    // });
  }

  saveAgendaItem() {
    this.addItemActive = false;
    this.agendaItems.push(this.agendaItemControl.value);
  }

  addAgendaItem() {
    console.log('worked');
  }

}
