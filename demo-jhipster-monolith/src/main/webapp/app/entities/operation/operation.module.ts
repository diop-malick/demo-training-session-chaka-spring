import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChakaJhipsterMonolithSharedModule } from 'app/shared';
import {
    OperationComponent,
    OperationDetailComponent,
    OperationUpdateComponent,
    OperationDeletePopupComponent,
    OperationDeleteDialogComponent,
    operationRoute,
    operationPopupRoute
} from './';

const ENTITY_STATES = [...operationRoute, ...operationPopupRoute];

@NgModule({
    imports: [ChakaJhipsterMonolithSharedModule, RouterModule.forChild(ENTITY_STATES)],
    exports: [OperationComponent],
    declarations: [
        OperationComponent,
        OperationDetailComponent,
        OperationUpdateComponent,
        OperationDeleteDialogComponent,
        OperationDeletePopupComponent
    ],
    entryComponents: [OperationComponent, OperationUpdateComponent, OperationDeleteDialogComponent, OperationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChakaJhipsterMonolithOperationModule {}
