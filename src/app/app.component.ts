import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'I Love Thailand 1234';

  // Explicit
  private myTitle: string;  // Demo Explicit Variable Type String
  private myColor: string;

  constructor() {}

  ngOnInit(): void {
    
    this.myTitle = "Doramon";
    this.myColor = '#FF0000'

  }




} // AppComponent Class
