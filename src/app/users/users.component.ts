import { Component } from '@angular/core';
import { Etudiant } from '../Entities';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  etudiants:Etudiant[]=[new Etudiant("Amine",24),new Etudiant("Lotfi",26),new Etudiant("Rania",25)];
}
