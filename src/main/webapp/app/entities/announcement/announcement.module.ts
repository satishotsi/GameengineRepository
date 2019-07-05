import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameengineSharedModule } from 'app/shared';
import {
  AnnouncementComponent,
  AnnouncementDetailComponent,
  AnnouncementUpdateComponent,
  AnnouncementDeletePopupComponent,
  AnnouncementDeleteDialogComponent,
  announcementRoute,
  announcementPopupRoute
} from './';

const ENTITY_STATES = [...announcementRoute, ...announcementPopupRoute];

@NgModule({
  imports: [GameengineSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    AnnouncementComponent,
    AnnouncementDetailComponent,
    AnnouncementUpdateComponent,
    AnnouncementDeleteDialogComponent,
    AnnouncementDeletePopupComponent
  ],
  entryComponents: [
    AnnouncementComponent,
    AnnouncementUpdateComponent,
    AnnouncementDeleteDialogComponent,
    AnnouncementDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameengineAnnouncementModule {}
