var AttackPoint

class Pokemon {
    constructor(Name, HP, ATK, DEF){
        this.Name = Name
        this.HP = HP
        this.ATK = ATK
        this.DEF = DEF
    }

    AttackPokemon(Pokemon){
        Pokemon.HP -= this.ATK - Pokemon.DEF
        AttackPoint = this.ATK - Pokemon.DEF
    }

}


var Gardevoir = new Pokemon("Gardevoir", 150, 37, 5)
var Lopunny = new Pokemon("Lopunny", 100, 25, 25)

while(Gardevoir.HP > 0 || Lopunny.HP > 0){
    Gardevoir.AttackPokemon(Lopunny)
    console.log(Gardevoir.Name + " a infligé " + AttackPoint + " à " + Lopunny.Name)
    console.log(Lopunny.Name + " a " + Lopunny.HP + " de vie restante")
        if(Lopunny.HP < 0){
            console.log(Lopunny.Name + " est KO! " + Gardevoir.Name + " a gagner le combat!")
            break
        }
    Lopunny.AttackPokemon(Gardevoir)
    console.log(Lopunny.Name + " a infligé " + AttackPoint + " à " + Gardevoir.Name)
    console.log(Gardevoir.Name + " a " + Gardevoir.HP + " de vie restante")
        if(Gardevoir.HP < 0){
            console.log(Gardevoir.Name + " est KO! " + Lopunny.Name + " a gagner le combat!")
            break
        }
}
