import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no',
}

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent),
    },
  ],
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {
  @Input() value: string = null;
  @Input() label = '';
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  id: string = null;
  options = YesNoButtonGroupOptions;
  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  get isYes(): boolean {
    return this.value === this.options.YES;
  }

  get isNo(): boolean {
    return this.value === this.options.NO;
  }

  activate(value: string) {
    this.writeValue(value);
  }

  writeValue(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
