import { Directive, Input, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '[appResize]',
})
export class ResizeDirective {
  @Input('leftResize') leftElement: HTMLElement;
  @Input('rightResize') rightElement: HTMLElement;
  grabber: boolean = false;
  width: number;
  constructor(private el: ElementRef<HTMLElement>) {}
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.width = event.target.outerWidth;
  }
  @HostListener('mousedown') onMouseDown() {
    this.grabber = true;
    this.el.nativeElement.classList.add('side-panel');
    this.width = window.innerWidth;

    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }

  @HostListener('window:mouseup') onMouseUp() {
    this.grabber = false;
    this.el.nativeElement.classList.remove('side-panel');
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }

  // @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
  //   if (this.grabber) {
  //     event.preventDefault();
  //     if (event.movementX > 0) {
  //       this.rightElement.style.flex = `0 5 ${
  //         (this.width || window.screen.availWidth) - event.clientX + 100
  //       }px`;
  //       this.leftElement.style.flex = `1 5 ${event.clientX - 16}px`;
  //     } else {
  //       this.leftElement.style.flex = `0 5 ${event.clientX - 16}px`;
  //       this.rightElement.style.flex = `1 5 ${
  //         (this.width || window.screen.availWidth) - event.clientX + 100
  //       }px`;
  //     }
  //   }
  // }

  @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent) {

    if (this.grabber) {

      event.preventDefault();

      if (event.movementX > 0) {
        console.log('right')
        this.rightElement.style.flex = `0 1 ${ ( this.width - event.clientX )}px`;
        this.leftElement.style.flex = '1 1 auto'
      } else {
        console.log('left')
        this.leftElement.style.flex = `0 1 ${ ( event.clientX )}px`;
        this.rightElement.style.flex = '1 1 auto'
      }
    }    
  }

}
