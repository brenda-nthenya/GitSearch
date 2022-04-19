import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elem: ElementRef) {}
  @HostListener('click') onClick() {
    this.textDeco('None');
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.textDeco('');
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.background = action;
  }
}