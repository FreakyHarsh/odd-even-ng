import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  evenArr: number[] = [];
  oddArr: number[] = [];
  timeEmitterValue(val) {
    val % 2 === 0 ? this.evenArr.push(val) : this.oddArr.push(val);
  }
}
