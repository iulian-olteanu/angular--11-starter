import { Component } from '@angular/core';
import { ColorSchemeService } from './services/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-dream-app';

  /**
   *
   */
  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    this.colorSchemeService.load();
  }
}
