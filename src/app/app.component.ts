import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'Calculator';
  t = document.getElementById('out') as HTMLInputElement;
  x: string;

  constructor(t, x) {
    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 55:
        t = document.getElementById('out') as HTMLInputElement;
        x = t.value = t.value + '7';
          console.log('7');
          break;
        case 103:
          console.log('7');
          break;
        case 39:
          console.log('Got to the next page');
          break;

        default:
          return; // Do nothing for the rest
      }
    };

  }

  clear() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = '';
  }

  zero() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '0';
  }

  one() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '1';
  }
  two() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '2';
  }

  three() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '3';
  }
  four() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '4';
  }

  five() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '5';
  }
  six() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '6';
  }

  seven() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '7';
  }
  eight() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '8';
  }
  nine() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '9';
  }
  decimal() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '.';
  }
  posneg() {
    this.t = document.getElementById('out') as HTMLInputElement;
    //  this.x = this.t.value = eval(this.t.value * -1);
  }
  add() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '+';
  }
  subtract() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '-';
  }
  multiply() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '*';
  }
  divide() {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = this.t.value + '/';
  }
  equal(z: string) {
    this.t = document.getElementById('out') as HTMLInputElement;
    this.x = this.t.value = eval(this.t.value);
    console.log(this.x);
  }
}
