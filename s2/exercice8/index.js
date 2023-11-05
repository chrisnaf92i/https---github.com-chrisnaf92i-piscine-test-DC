// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {
    let newHours;
    let newMinutes;
    if(heures <= 9) newHours = `0${heures}`; else newHours = heures
    if(minutes <= 9) newMinutes = `0${minutes}`; else newMinutes = minutes
    return newHours + ":" + newMinutes;
}