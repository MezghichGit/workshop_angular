import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  logo:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcOuz17dyeXVHeUdUgaSRcvgDb7hO06tGjw&s";
  show: boolean = true;
  title = 'amsfront';
  formateur: string = "Mohamed Amine MEZGHICH";
  organisme: string = "SIP ACADEMY";
  nbreHeures: number = 60;
  stagiaires: string[] = ["Rania", "Riden", "Abbassi", "Nabil", "Primo", "Samah", "Imen", "Achref", "Marwen", "Marwa"];

  display() {
    alert("Hello SIP Academy");
    console.log("Hello SIP Academy");
  }

  toggle() {
    this.show = !this.show;
  }

}
