import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../Entities';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  etudiants:Etudiant[]=[new Etudiant("Amine",24),new Etudiant("Lotfi",26),new Etudiant("Rania",25)];
  users:any;
  //injection du service UserService dans le composant
  public constructor(private userService:UserService){
    console.log("Constructeur");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
    this.userService.getAllUsers().subscribe(
      data=>{
        this.users = data,
        console.log(data);
      }
    );
  }
}
