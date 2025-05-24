import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ngx-rkaeditorComponent } from '../../../ngx-rkaeditor/src/lib/ngx-rkaeditor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ngx-rkaeditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
  
}
