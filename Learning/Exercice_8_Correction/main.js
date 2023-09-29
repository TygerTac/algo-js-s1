class Pokemon {
    constructor(Name, ATK, DEF, HP, LUCK){
    this.Name = Name
    this.ATK = ATK
    this.DEF = DEF
    this.HP = HP
    this.LUCK = LUCK
    }

    IsLucky(){
            if(Math.random() <= this.LUCK){
                return true
            }
            else {
                return false
            }
    }

    AttackPokemon(Pokemon){
        if(this.IsLucky() === true){
        var damage = this.ATK - Pokemon.DEF
        Pokemon.HP -= damage
        console.log(this.Name + " a infligé " +  damage + " de dégat à " + Pokemon.Name + ", il lui reste " + Pokemon.HP + " point de vie")
        if(Pokemon.HP <= 0){
            console.log(Pokemon.Name + " n'a plus de vie! " + this.Name + " a gagner le combat!")
        }
        } else{
        console.log(Pokemon.Name + " a esquiver l'attaque de " + this.Name + "!")
        }
    }
}

var Pikachu = new Pokemon("Pikachu", 20, 5, 100, 0.7)
var Carapuce = new Pokemon("Carapuce", 10, 5, 300, 0.7)

while(Pikachu.HP > 0 && Carapuce.HP > 0){
    Pikachu.AttackPokemon(Carapuce)
    if(Carapuce.HP <= 0){
        break
    }
    Carapuce.AttackPokemon(Pikachu)
    if(Pikachu.HP <= 0){
        break
    }
}