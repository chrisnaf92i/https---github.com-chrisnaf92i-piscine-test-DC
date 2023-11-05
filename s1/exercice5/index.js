// Exercice 5: Calcul de la factorielle d'un nombre
module.exports = function factorielle(n) {
    if (n === 0 ) {
        return 1;
    } else if (n === 1 ) {
        return 1;
    } else {
        return n * factorielle(n - 1);
    }
}