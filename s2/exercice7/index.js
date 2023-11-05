// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {
    const formatedDate = new Date(date)

    const firstDay = new Date(formatedDate.getFullYear(), formatedDate.getMonth() + 1, 1)
    const lastDay = new Date(firstDay)

    return lastDay.toISOString().split("T")[0];
}
