import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ChartsComponent} from './charts.component';
import {ChartsRoutes} from './charts.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ChartsRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ChartsComponent]
})

export class ChartsModule {
}
