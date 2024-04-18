import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentLanguage: string;

  constructor(private translate: TranslateService, private elementRef: ElementRef, private renderer: Renderer2) {
    this.currentLanguage = 'en'; // Set initial language
    this.translate.use(this.currentLanguage); // Switch language
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pl' : 'en'; // Toggle between 'en' and 'pl'
    this.translate.use(this.currentLanguage); // Switch language
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footer = this.elementRef.nativeElement.querySelector('.footer');
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;
      
    this.renderer.addClass(footer, 'show');
      setTimeout(() => {
        this.renderer.removeClass(footer, 'show');
      }, 1000); // change after 1s)
  }
}
