import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
} from '@angular/material';

@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatTooltipModule,
        MatPaginatorModule,
    ]
})
export class MaterialModule { }