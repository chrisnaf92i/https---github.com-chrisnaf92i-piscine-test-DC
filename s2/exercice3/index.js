// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {

    let formatedDate1 = new Date(date1)
    let formatedDate2 = new Date(date2)

    return (formatedDate1 - formatedDate2) / (1000 * 60 * 60 * 24)
}