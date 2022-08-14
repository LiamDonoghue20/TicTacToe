import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  //Format the buttons differently whether the value is X, O or null
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
    <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  //CSS styling
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent  {

  //sends the input of X or O to the parent board component
  @Input() value: 'X' | 'O';

}
