import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = 'This is Paragraph Content';
  statuscontent = false;
  numbers = [];
  
  toggleContent() {
    this.statuscontent = !this.statuscontent
    this.numbers.push(this.numbers.length + 1)
  }

  getColor(number){
    console.log(number)
    if (this.numbers.length >=5 ){
      return "blue";
    }
  }

}
