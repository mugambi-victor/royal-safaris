import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone:true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn',[
      state('hidden', style({ opacity: 0 })),
      state('shown', style({ opacity: 1 })),
      transition('hidden => shown', animate('2000ms ease-out')),
    ]
    
    )
  ],
  
  imports:[]
  
})
export class AboutComponent {
 
}

