import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighterNumber]'
})
export class HighlighterNumberDirective {

  @Input() highlighter: any
  highlightColor ='red'
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const regexp = new RegExp(/(^|\b\s)\d+\s/g);
    const sentences = this.highlighter.replace(regexp, `<span style="color: ${this.highlightColor}">$&</span>`)
    this.el.nativeElement.innerHTML = sentences
  }




}




