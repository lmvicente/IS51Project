import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'Calculator';
  x = document.getElementById('out');

  constructor() { }

  clear (t: string) {
    t = document.getElementById('out').value = '0';
    alert('Numbers cleared!');
  }

  seven(y: string) {
  y = this.x.value;
  this.x.append(y);
  }
  // clear(x: number, numberVal) {
  //   numberVal = this.outputVal.value;
  //   x = numberVal.length;
  //   if (x >= 0) {
  //     numberVal = '';
  //     alert('cleared');
  //   }
  // }

  // myFunction(outputVal, result: string) {
  //   outputVal = this.output as HTMLInputElement;
  //   result = '7' + outputVal.value;
  //   if (outputVal === '') {
  //     alert('must have something');
  //   } else {
  //     alert(outputVal);
  //   }
  // }
}
