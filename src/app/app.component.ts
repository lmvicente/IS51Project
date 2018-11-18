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

  constructor() {
    // let p = document.getElementById('out') as HTMLInputElement;
    let x: string;
    document.addEventListener('keydown', (event) => {
      const keyEvent = event.keyCode;
      if (keyEvent === 49 || keyEvent === 97) {
        x = this.t.value = this.t.value + '1';
        console.log(x);
      }
      if (keyEvent === 50 || keyEvent === 98) {
        x = this.t.value = this.t.value + '2';
        console.log(x);
      }
      if (keyEvent === 51 || keyEvent === 99) {
        x = this.t.value = this.t.value + '3';
        console.log(x);
      }
      if (keyEvent === 52 || keyEvent === 100) {
        x = this.t.value = this.t.value + '4';
        console.log(x);
      }
      if (keyEvent === 53 || keyEvent === 101) {
        x = this.t.value = this.t.value + '5';
        console.log(x);
      }
      if (keyEvent === 54 || keyEvent === 102) {
        x = this.t.value = this.t.value + '6';
        console.log(x);
      }
      if (keyEvent === 55 || keyEvent === 103) {
        x = this.t.value = this.t.value + '7';
        console.log(x);
      }
      if (keyEvent === 56 || keyEvent === 104) {
        x = this.t.value = this.t.value + '8';
        console.log(x);
      }
      if (keyEvent === 57 || keyEvent === 105) {
        x = this.t.value = this.t.value + '9';
        console.log(x);
      }
      if (keyEvent === 48 || keyEvent === 96) {
        x = this.t.value = this.t.value + '0';
        console.log(x);
      }
      if (keyEvent === 190 || keyEvent === 110) {
        x = this.t.value = this.t.value + '.';
        console.log(x);
      }
      if (keyEvent === 107) {
        x = this.t.value = this.t.value + '+';
        console.log(x);
      }
      if (keyEvent === 111) {
        x = this.t.value = this.t.value + '/';
        console.log(x);
      }
      if (keyEvent === 106) {
        x = this.t.value = this.t.value + '*';
        console.log(x);
      }
      if (keyEvent === 109) {
        x = this.t.value = this.t.value + '-';
        console.log(x);
      }

      if (keyEvent === 8) {
        x = this.t.value = '';
        console.log('cleared');
      }
      if (keyEvent === 13) {
        x = this.t.value = eval(this.t.value);
      }
    }
    );

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
  posneg(y: number, x, negNum: string, mathNum: number, mathLet: string) {
    this.t = document.getElementById('out') as HTMLInputElement;
    y = parseInt(this.t.value, 10);
    x = Math.sign(y);
    console.log(Math.sign(y));
    if (x === -1) {
      negNum = Math.abs(y).toString(10);
      this.x = this.t.value = negNum;
    } else {
      if (x === 1) {
        mathNum = (Math.abs(y) * -1);
        mathLet = mathNum.toString(10);
        this.x = this.t.value = mathLet;
      } else {
        if (x === 0) {
          alert('zero not negative');
        }
      }
    }
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
  percent(y: number, x: number, z) {
    this.t = document.getElementById('out') as HTMLInputElement;
    y = parseInt(this.t.value, 10);
    x = (y / 100);
    z = x.toString(10);
    this.x = this.t.value = z;
  }
}
