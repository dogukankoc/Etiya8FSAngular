import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,CommonModule,ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'etiya-fs-angular';

  products = [
    {
      name: 'Samsung Galaxy S10',
      price: 900,
      discontinued: true,
    },
    {
      name: 'Iphone 11',
      price: 1200,
      discontinued: false,
    },
    {
      name: 'Huawei P30',
      price: 800,
      discontinued: false,
    },
  ];
  onButtonClick() {
    console.log('Button clicked');
  }
}
