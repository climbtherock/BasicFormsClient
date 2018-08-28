import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'meeting',
    loadChildren: 'src/app/meeting/meeting.module#MeetingModule'
  },
  {
    path: 'agendaItem',
    loadChildren: './agenda-item/agenda-item.module#AgendaItemModule'
  },
  {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
