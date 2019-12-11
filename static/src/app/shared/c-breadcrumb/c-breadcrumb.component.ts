import {Component, Input, OnInit} from '@angular/core';
import {I18nService} from '../../i18n.service';
import {BreadcrumbItem} from '../domain/Breadcrumb';

@Component({
  selector: 'c-breadcrumb',
  templateUrl: './c-breadcrumb.component.html',
  styleUrls: ['./c-breadcrumb.component.scss']
})
export class CBreadcrumbComponent implements OnInit {

  @Input()
  before: BreadcrumbItem[];

  @Input()
  active: string;

  constructor(private _i18n: I18nService) { }

  ngOnInit() {
  }

  getLabel(path: string): string {
    return this._i18n.get(`breadcrumb.${path}`);
  }
}
