import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BrokerComponent } from './broker/broker.component';
import { BrokerAdminComponent } from './broker-admin/broker-admin.component';
import { RtmAdminComponent } from './rtm-admin/rtm-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [BrokerComponent, BrokerAdminComponent, RtmAdminComponent, PageNotFoundComponent]
})
export class SharedModule { }
