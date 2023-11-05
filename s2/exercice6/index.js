// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {
    const receivedDate = new Date(date)
    const firstDay = new Date(Date.UTC(receivedDate.getFullYear(), receivedDate.getMonth(), 1))
    return firstDay.toISOString().split("T")[0];
}