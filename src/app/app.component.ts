import { Component } from '@angular/core';
import { AppSignalComponent } from './app-signal/app-signal.component';

@Component({
  selector: 'app-root',
  imports: [AppSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-playground';
}
