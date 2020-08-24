import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`
  .even {
    background-color: green;
    color: white;
    border-radius: 30px;
    margin-bottom: 10px;
}`]
})
export class EvenComponent implements OnInit {
  @Input() iForEven: number;
  constructor() { }

  ngOnInit(): void {
  }
}
