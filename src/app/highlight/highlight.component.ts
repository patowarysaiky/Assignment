import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  value= 'Steve is 26 years old 37Street';
  constructor() { }

  ngOnInit(): void {
  }

}
