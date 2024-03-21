import { Component, OnInit } from '@angular/core';

declare global {
  interface Window { initializeCarousel: any; }
}

// Import the JavaScript file
import './carousel-script.js';

@Component({
  
  selector: 'app-card-slider',
  standalone: true,
  imports: [],
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  isFlipped: boolean = false;
  isFlipped1: boolean = false;
  constructor() { }

  ngOnInit(): void {
    // Call the initializeCarousel function when the component initializes
    window.initializeCarousel();
  }
  
}
