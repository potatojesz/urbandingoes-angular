import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, TranslateModule, RouterLink],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = 'en'; // Set initial language
    this.translate.use(this.currentLanguage); // Switch language
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pl' : 'en'; // Toggle between 'en' and 'pl'
    this.translate.use(this.currentLanguage); // Switch language
  }
}
