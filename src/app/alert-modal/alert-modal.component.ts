import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent {

  @Input() public msg: string;

  constructor() { }

  setMsg(msg: string): void {
    this.msg = msg;
  }

}
