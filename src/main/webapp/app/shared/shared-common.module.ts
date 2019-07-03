import { NgModule } from '@angular/core';

import { GameengineSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GameengineSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GameengineSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GameengineSharedCommonModule {}
