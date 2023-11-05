// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
    const formatedDate = date.toString().split("-").reverse().join("/")
    return formatedDate
}