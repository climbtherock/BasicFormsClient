import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meeting } from './meeting.component';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private httpClient: HttpClient) { }

  getMeetings() {
    return this.httpClient.get<Meeting[]>('http://384ff4f8.ngrok.io/api/Meetings');
  }

  getMeeting(id: number) {
    return this.httpClient.get<Meeting>(`http://384ff4f8.ngrok.io/api/Meetings/${id}`);
  }
}
