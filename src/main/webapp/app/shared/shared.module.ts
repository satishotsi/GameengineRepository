import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GameengineSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GameengineSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GameengineSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameengineSharedModule {
  static forRoot() {
    return {
      ngModule: GameengineSharedModule
    };
  }
}
