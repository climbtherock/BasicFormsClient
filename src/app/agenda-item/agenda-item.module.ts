import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaItemDetailComponent } from './agenda-item-detail/agenda-item-detail.component';
import { SharedModule } from '../shared/shared.module';
import { AgendaItemRoutingModule } from './agenda-item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AgendaItemRoutingModule
  ],
  declarations: [AgendaItemDetailComponent]
})
export class AgendaItemModule { }
