import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  @Output() timeEmitter = new EventEmitter<number>();

  i: number = 1;
  intervalTracker: number;

  constructor() { }
  ngOnInit(): void {
  }

  startTimer() {
    this.intervalTracker = setInterval(() => {
      this.timeEmitter.emit(this.i++);
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.intervalTracker);
  }

  resetTimer(): void {
    this.i = 1;
    clearInterval(this.intervalTracker);
  }
}
