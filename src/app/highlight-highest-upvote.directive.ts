import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightHighestUpvote]'
})
export class HighlightHighestUpvoteDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.background= 'turquoise'
  }

}
