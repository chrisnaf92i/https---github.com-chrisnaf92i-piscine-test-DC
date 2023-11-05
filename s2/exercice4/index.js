// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    const previousDate = new Date(date)
    previousDate.setDate(previousDate.getDate() + jours);
    return previousDate.toISOString().split("T")[0]
}
