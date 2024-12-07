import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amsfront';
  formateur: string = "Mohamed Amine MEZGHICH";
  organisme: string = "SIP ACADEMY";
  nbreHeures: number = 60;
  stagiaires: string[] = ["Rania", "Riden", "Abbassi", "Nabil", "Primo", "Samah", "Imen", "Achref", "Marwen", "Marwa"];

  display() {
    alert("Hello SIP Academy");
    console.log("Hello SIP Academy");
  }

}
