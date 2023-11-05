// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const date = new Date()

    const result = date.getFullYear() - 10 + "-" + date.getMonth() + "-" + date.getDay()

    return result
}
