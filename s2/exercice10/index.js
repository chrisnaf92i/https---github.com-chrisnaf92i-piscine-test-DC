// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    const formatedBirthday = new Date(dateNaissance)
    const today = new Date()
    return today.getFullYear() - formatedBirthday.getFullYear()
}