export class Etudiant {
    public nom: any;
    public age: any;

    public constructor(nom: any, age: any) {
        this.nom = nom;
        this.age = age;
    }
    public toString() {
        return "Etudiant : " + this.nom + " " + this.age;
    }
}