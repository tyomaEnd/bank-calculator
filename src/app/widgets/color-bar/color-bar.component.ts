import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-bar',
  templateUrl: './color-bar.component.html',
  styleUrls: ['./color-bar.component.scss']
})
export class ColorBarComponent implements OnInit {
  @Input() percent: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
