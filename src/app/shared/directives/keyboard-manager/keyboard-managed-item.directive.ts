import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appKMItem]',
})
export class KeyboardManagedItemDirective {
  @Output() focused = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  focus() {
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  isFocused() {
    return this.elementRef.nativeElement === document.activeElement;
  }
}
