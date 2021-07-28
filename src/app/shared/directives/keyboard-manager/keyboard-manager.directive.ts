import {
  Directive,
  HostListener,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}

@Directive({
  selector: '[appKM]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  items: QueryList<KeyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  manageKeys(event: KeyboardEvent) {
    switch (event.key.toUpperCase()) {
      case 'ARROWUP':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ARROWDOWN':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ARROWLEFT':
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ARROWRIGHT':
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const currentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[currentSelectedIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}
