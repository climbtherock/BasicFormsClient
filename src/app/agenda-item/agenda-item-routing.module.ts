import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaItemDetailComponent } from './agenda-item-detail/agenda-item-detail.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AgendaItemDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaItemRoutingModule { }
