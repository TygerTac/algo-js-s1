var A = "Jean"
var B = "Paul"
var Result

function checkName(FirstName, SecondName){
    if(FirstName == SecondName){
    return "C'est Identique"
    }
    else{
    return "C'est pas Identique"
    }
}

Result = checkName(A, B)
console.log(Result)

//Deuxieme fonction pour l'exercice 5, Faire une fonction calcul qui va multiplier deux nombre et soustraire un troisieme

var A = 3
var B = 8
var C = 5
var D = 9
var ResultCalcul
var ResultCalcul2

function calcul(firstnumber, secondnumber){
    return(firstnumber - secondnumber)
}

ResultCalcul = calcul(A, B)
console.log(ResultCalcul)
ResultCalcul2 = calcul(C, D)
console.log(ResultCalcul2)