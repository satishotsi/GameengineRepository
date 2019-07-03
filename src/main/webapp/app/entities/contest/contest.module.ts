import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameengineSharedModule } from 'app/shared';
import {
  ContestComponent,
  ContestDetailComponent,
  ContestUpdateComponent,
  ContestDeletePopupComponent,
  ContestDeleteDialogComponent,
  contestRoute,
  contestPopupRoute
} from './';

const ENTITY_STATES = [...contestRoute, ...contestPopupRoute];

@NgModule({
  imports: [GameengineSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ContestComponent,
    ContestDetailComponent,
    ContestUpdateComponent,
    ContestDeleteDialogComponent,
    ContestDeletePopupComponent
  ],
  entryComponents: [ContestComponent, ContestUpdateComponent, ContestDeleteDialogComponent, ContestDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameengineContestModule {}
