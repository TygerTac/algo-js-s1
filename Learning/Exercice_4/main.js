var a = 3

while(a < 9) {
    a++

    if(a == 8){
        console.log("boucle arreté")
        break
    }
    if(a == 7){
        console.log("boucle revenu au début de la boucle?")
        continue
    }
    console.log(a)
}