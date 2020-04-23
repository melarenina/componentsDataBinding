import {
  Component,
  OnInit, Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
 // Element may only have this type, that's why we use {}
 // @Input() allows to access the property from other components
 // The content inside () is the property name to use outside this component
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  // Name of the local reference        // Name of variable
  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);

  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit is called!')
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
