import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = [];

  ColorArray() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.colors.push('YellowGreen ');
      } else if (randNum === 2) {
        this.colors.push('Orange ');
      } else if (randNum === 3) {
        this.colors.push('DodgerBlue ');
      } else if (randNum === 4) {
        this.colors.push('Indigo ');
      } else if (randNum === 5) {
        this.colors.push('Yellow ');
      } else if (randNum === 6) {
        this.colors.push('Red');
      } else if (randNum === 7) {
        this.colors.push('SpringGreen');
      }
    }
  }

  ngOnInit() {
    this.ColorArray();
  }
}
