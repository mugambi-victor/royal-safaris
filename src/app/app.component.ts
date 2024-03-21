import { Component, HostListener } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router, Event, NavigationEnd } from '@angular/router';

import { IStaticMethods } from 'preline/preline';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CardSliderComponent } from './card-slider/card-slider.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ CommonModule, AboutComponent, EventsComponent, TestimonialsComponent, FooterComponent, SlideshowComponent, CardSliderComponent],
  styleUrl: './app.component.css',
  // animations: [
  //   trigger('slideUpTrigger', [
  //     state('hidden', style({ transform: 'translateY(140%)' })),
  //     state('shown', style({ transform: 'translateY(0%)' })),
  //     transition('hidden => shown', animate('500ms ease-in')),
  //   ]),
  //   trigger('slideUpTrigger2', [
  //     state('hidden', style({ transform: 'translateY(140%)' })),
  //     state('shown', style({ transform: 'translateY(0%)' })),
  //     transition('hidden => shown', animate('1200ms ease-in')),
  //   ]),
  // ],
})
export class AppComponent {
  public menuOpen: boolean = false;
  // state= 'hidden';
  constructor(private router: Router) {
  }
  // ngOnInit() {
  //   this.router.events.subscribe((event: Event) => {
  //     if (event instanceof NavigationEnd) {
  //       setTimeout(() => {
  //         window.HSStaticMethods.autoInit();
  //       }, 1500);
  //     }
  //   });
  // }
  // ngAfterViewInit() {
  //   setTimeout(() => {
  //     this.state = 'shown';
  //   }, 200);
  // }
  scrolled = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.scrolled = scrollTop > this.lastScrollTop;
   

    // Check if the user has scrolled to the topmost of the page
    if (scrollTop === 0) {
      this.scrolled = false;
    }
  }
}