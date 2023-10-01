// à fixer si je peux : trouver un moyens d'ajouter les survivants morts et chercher comment fixer le jason qui cherche à attaqué un survivant  mais qui n'attaque pas??

class Survivor{
    constructor(Name, Alive, Damage, Deathblow, VendettaDeathblow, VendettaDamage, Gender, HairColor, Trait){
        this.Name = Name
        this.Alive = Alive
        this.Damage = Damage
        this.Deathblow = Deathblow
        this.VendettaDeathblow = VendettaDeathblow 
        this.VendettaDamage = VendettaDamage
        this.Gender = Gender
        this.HairColor = HairColor
        this.Trait = Trait
    }
    GotKilled(){
        if(Math.random() <= this.Deathblow){
            return true
        }
        else {
            return false
        }
    }
    HitnDie(){
        if(Math.random() <= this.VendettaDeathblow){
            return true
        }
        else {
            return false
        }    
    }
}



class Killer{
    constructor(Name, Health){
        this.Name = Name
        this.Health = Health
    }

    AttackSurvivor(Survivor){
        while(Survivor.length > 0 && this.Health > 0){
            var Random_Target = Math.floor(Math.random() * Survivor.length);
            var Target_Survivor = Survivor[Random_Target];
            Target_Survivor
            console.log(this.Name + " cherche un survivant à attaquer..")
            console.log(this.Name + " s'est attaqué à " + Target_Survivor.Name + "!")

            if(Target_Survivor.GotKilled() && !Target_Survivor.HitnDie()){
                console.log(Target_Survivor.Name + " s'est fait tuer par " + this.Name)
                Target_Survivor.Alive = 0
                Survivor.splice(Target_Survivor, 1)
            }
            else if(!Target_Survivor.GotKilled() && Target_Survivor.HitnDie()){
                console.log(Target_Survivor.Name + " s'est fait tuer par " + this.Name + " mais à attaqué " + this.Name + " pour " + Target_Survivor.VendettaDamage + " de dégats!")
                this.Health -= Target_Survivor.VendettaDamage
                Target_Survivor.Alive = 0
                Survivor.splice(Target_Survivor, 1)
            }
            else if(!Target_Survivor.GotKilled() && !Target_Survivor.HitnDie()){
                console.log(Target_Survivor.Name + " à esquivé l'attaque de " + this.Name + " et à infligé " + Target_Survivor.Damage + " de dégats!")
                this.Health -= Target_Survivor.Damage
            }
            if(Survivor.length <= 0){
                console.log("Tout les survivants sont mort! " + this.Name + " a gagner avec " + this.Health + " de vie restante")
                break
            }
            if(this.Health <= 0){
                console.log(this.Name + " est mort par " + Target_Survivor.Name + "!" + "RIP à ") // Comment??
                break
            }
        }
    }
}

function Randomized(Random) { 
    return Random[Math.floor(Math.random() * Random.length)]
}

var Gender = ["Homme", "Femme"]
var Color = ["Noir", "Rouge", "Marron", "Bleu", "Blanc"]
var Traits = ["Geek", "Sportif", "Peureux", "Brave", "Boloss"]
var SurvNames = ["Alex", "Nyx", "Avery", "Riley", "Jayden", "River", "Parker", "Quinn", "Noah", "Kai", "Nova", "Sarmie"]
var RandomName = Randomized(SurvNames)
var RandomGender = Randomized(Gender)
var RandomColor = Randomized(Color)
var RandomTrait = Randomized(Traits)


//Ce que on s'apprete à voir est un code horrible mais j'ai pas compris comment correctement faire pour que ça choisis un nom puis choisis un autre, du coups j'ai du le faire comme ça, c'est tellement horrible que j'ai comment avec // oui.

var Jason = new Killer("Jason", 100)
var Survivor1 = new Survivor(RandomName, 1, 10, 0.3, 0.3, 15, RandomGender, RandomColor, RandomTrait)
RandomName = Randomized(SurvNames)
RandomGender = Randomized(Gender)
RandomColor = Randomized(Color)
RandomTrait = Randomized(Traits)
var Survivor2 = new Survivor(RandomName, 1, 20, 0.7, 0.7, 25, RandomGender, RandomColor, RandomTrait)
RandomName = Randomized(SurvNames)
RandomGender = Randomized(Gender)
RandomColor = Randomized(Color)
RandomTrait = Randomized(Traits)
var Survivor3 = new Survivor(RandomName, 1, 5, 0.4, 0.4, 10,  RandomGender, RandomColor, RandomTrait)
RandomName = Randomized(SurvNames)
RandomGender = Randomized(Gender)
RandomColor = Randomized(Color)
RandomTrait = Randomized(Traits)
var Survivor4 = new Survivor(RandomName, 1, 3, 0.1, 0.1, 20, RandomGender, RandomColor, RandomTrait)
RandomName = Randomized(SurvNames)
RandomGender = Randomized(Gender)
RandomColor = Randomized(Color)
RandomTrait = Randomized(Traits)
var Survivor5 = new Survivor(RandomName, 1, 10, 0.4, 0.6, 15, RandomGender, RandomColor, RandomTrait)
RandomName = Randomized(SurvNames)
RandomGender = Randomized(Gender)
RandomColor = Randomized(Color)
RandomTrait = Randomized(Traits)
var Survivors = [Survivor1, Survivor2, Survivor3, Survivor4, Survivor5];

console.log(Gender)
console.log(Color)
console.log(Traits)
console.log(SurvNames)
console.log(Jason)
console.log(Survivor1)
console.log(Survivor2)
console.log(Survivor3)
console.log(Survivor4)
console.log(Survivor5)
Jason.AttackSurvivor(Survivors)