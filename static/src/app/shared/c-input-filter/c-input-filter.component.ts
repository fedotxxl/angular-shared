import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FilterItem} from '../domain/Filter';
import * as _ from "lodash";

@Component({
  selector: 'c-input-filter',
  template: `
    <ng-selectize [config]="this.selectize.config" [options]="this.selectize.options" [placeholder]="this.placeholder" [enabled]="!this.disabled" [(ngModel)]="model" ngDefaultControl></ng-selectize>
  `,
  styleUrls: ['./c-input-filter.component.scss']
})
export class CInputFilterComponent implements OnInit, OnChanges {

  @Input()
  selectedIds: string[];

  @Input()
  items: FilterItem[];

  @Input()
  placeholder: string;

  @Input()
  config: any;

  @Input()
  disabled: false;

  @Output()
  onSelected: EventEmitter<FilterItem[]> = new EventEmitter();

  selectize: any;

  model: string[];

  constructor() {
  }

  ngOnInit() {
    var configDefaults = {
      maxItems: 50,
      plugins: ['remove_button'],
      valueField: 'idUnique',
      labelField: 'label',
      searchField: 'text',
      delimiter: '|',
      placeholder: this.placeholder,
      hideSelected: true,
      closeAfterSelect: false,
      render: {
        option: function (data: FilterItem, escape) {
          return '<div class="c-input-filter_item"><div>' + escape(data.label) + '</div><div class="c-input-filter--type _' + data.type + '">' + data.typeTranslation + '</div></div>';
        },
        item: function (data: FilterItem, escape) {
          return `<div class="c-input-filter_item">
                <div class="c-input-filter_item--type c-input-filter--type _${data.type}">${data.typeTranslation}</div>
                <div class="c-input-filter_item--label">${escape(data.label)}</div>
            </div>`;
        }
      },
      onChange: (selected) => {
        const selectedItems = [];
        const selectedIds = ((_.isArray(selected)) ? selected : [selected]) as string[];

        this.items.forEach(item => {
          if (selectedIds.indexOf(item.idUnique) >= 0) {
            selectedItems.push(item);
          }
        });

        this.onSelected.emit(selectedItems);
      }
    };

    this.selectize = {
      options: [],
      config: _.extend(configDefaults, this.config)
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectize) {
      this.selectize.options.length = 0;
      this.selectize.options.push(...this.items);
    }

    this.model = this.selectedIds;
  }

}
