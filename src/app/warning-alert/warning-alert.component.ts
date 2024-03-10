import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrl: './warning-alert.component.css'
})
export class WarningAlertComponent {
  displayDetail = false;
  buttonClicks = [];

  toggleDetails(){
    this.displayDetail = !this.displayDetail;
    this.buttonClicks.push("Button clicked at: " + Date.now());
    console.log(this.buttonClicks.length);
  }

  getBackground(index){
    return index >= 4 ? 'blue':'white';
  }
}
