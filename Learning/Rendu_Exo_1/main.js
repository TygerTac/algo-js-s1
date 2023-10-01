class Character{
    constructor(Name, Sanity){
    this.Name = Name
    this.Sanity = Sanity
    }

    Route(Playlist) {
        var redLightNumbers = 30
        var Taxi_Switch = 0
        console.log(this)
        console.log(Playlist + " = Playlist")
        console.log(Playlist[0] + " = Musique Détesté")
        console.log(this.Name + " commence son trajet!")

        while(redLightNumbers > 0 && this.Sanity > 0){
            redLightNumbers--
            var Shuffle_Playlist = Playlist[Math.floor(Math.random() * Playlist.length)]
            if(redLightNumbers === 0){
                console.log(this.Name + " a reussi à atteindre sa destination avant d'exploser!")
                console.log(this.Name + " a pris seulement " + Taxi_Switch + " Taxi et leur reste " + this.Sanity + " de point de mental")
                break
            }
            Shuffle_Playlist
            console.log("La radio fait tourner une musique : " + Shuffle_Playlist + " ! ")
            if(Shuffle_Playlist == Playlist[0]){
                Shuffle_Playlist
                this.Sanity -= 1
                if(this.Sanity <= 0){
                    console.log(this.Name + " a exploser en écoutant une musique horrible! " + this.Name + " n'avait que " + redLightNumbers + " feu rouge restante pour atteindre sa destination! " + this.Name + " a aussi pris " + Taxi_Switch + " taxi!"  )
                    break
                }
                Taxi_Switch += 1
                console.log(this.Name + " a entendu une musique horrible et à décidé de changer de taxi avant de craqué!")
                console.log(this.Name + " est à son " + Taxi_Switch + " Taxi! " + this.Name + " a " + this.Sanity + " points de mentale restante!")
            }
            console.log(this.Name + " n'a que " + redLightNumbers + " feu rouge restante pour atteindre sa destination")
        }
    }
}

var Songs = ["Anissa - Wejdene", "Take A Walk - Passion Pit", "Never Gonna Give You Up - Rick Astley", "Money so Big - Yeat", "Everybody Love me - OneRepublic"]


var John = new Character("John", 10)    
John.Route(Songs)

