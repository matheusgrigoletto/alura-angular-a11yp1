import { Component, Input, Output, EventEmitter } from '@angular/core';

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
})
export class YesNoButtonGroupComponent {
  @Input() value: string = null;
  @Input() label = '';
  @Output() valueChange = new EventEmitter<string>();
  options = YesNoButtonGroupOptions;

  get isYes(): boolean {
    return this.value === this.options.YES;
  }

  get isNo(): boolean {
    return this.value === this.options.NO;
  }

  activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
