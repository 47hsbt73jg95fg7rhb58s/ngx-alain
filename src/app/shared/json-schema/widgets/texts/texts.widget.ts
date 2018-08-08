import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-texts',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <span [innerHTML]="getTextValue"></span>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
export class TextsWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'texts';

  ngOnInit(): void {
    this.ui._required = false;
  }

  get getTextValue() {
    if (this.ui.enum) {
      let tmpValue = this.value;
      if (tmpValue == undefined || tmpValue == null)
        tmpValue = this.schema.default;
      return this.getDict(this.ui.enum, tmpValue);
    } else {
      return this.value || this.ui.defaultText || '-';
    }
  }

  getDict = (dict, v) => {
    for (const idx of dict) {
      if (idx) {
        if (idx.hasOwnProperty('value') && idx.value == v) {
          return idx.title || idx.label || '-';
        }
      }
    }
    return '-';
  }

}
