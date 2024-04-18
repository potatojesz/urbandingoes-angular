import { Component } from '@angular/core';
import { InstagramViewComponent } from '../instagram-view/instagram-view.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InstagramViewComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
