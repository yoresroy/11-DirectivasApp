import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  constructor() {
    console.log('Contructor directive')
  }
  ngOnInit(): void {
    console.log('OnInit directive')
  }

}
