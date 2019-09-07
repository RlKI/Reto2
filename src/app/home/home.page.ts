import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  arrayNames: string[];
  outputName: string = "";
  textedNames: string = "";
  interval;

  constructor() { }

  async rollClick() {
    let n = 6;

    this.arrayNames = this.textedNames.split(",");
    let maxNumber = this.arrayNames.length; - 1;
    this.interval = setInterval(() => {
      this.outputName = this.arrayNames[Math.floor(Math.random() * maxNumber)];
      n--;
      if (n < 0 && this.interval) {
        clearInterval(this.interval);
      }
    }, 500)
  }
}
