// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
    
    const formatedBegin1 = new Date(debut1)
    const formatedBegin2 = new Date(debut2)
    const formatedEnd1 = new Date(fin1)
    const formatedEnd2 = new Date(debut2)

    return formatedBegin1 < formatedEnd2 && formatedBegin2 < formatedEnd1;
}