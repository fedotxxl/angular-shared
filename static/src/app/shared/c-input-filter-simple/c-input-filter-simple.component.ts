import {Component, Input, OnInit} from '@angular/core';
import {Filter} from '../domain/Filter';

@Component({
    selector: 'c-input-filter-simple',
    template: `
        <c-input-filter [placeholder]="placeholder" [items]="filter.items" [selectedIds]="filter.getSelectedIds()" [disabled]="isDisabled()" (onSelected)="filter.setSelected($event)"></c-input-filter>`,
    styleUrls: ['./c-input-filter-simple.component.scss']
})
export class CInputFilterSimpleComponent implements OnInit {

    @Input()
    filter: Filter;

    @Input()
    placeholder: string;

    constructor() {
    }

    ngOnInit() {
    }

    isDisabled(): boolean {
        const items = this.filter.items;

        return !items || items.length == 0;
    }
}
