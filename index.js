const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

app.post("/s1/exercice1", (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
  
    if (n1 == null || n2 == null) {
      return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n1) {
      return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    if (!n2) {
      return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
  
    let a = addition(n1, n2);
    return res.json([{ reponse: a }]);
  });

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    
    if(!n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    
    if(!n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    
    if(!n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1
    
    console.log(n1)
   
    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(n1 == 0 || n1 == 0){
        return res.jsont([{response: 1}])
    }
    
    let a = factorielle(n1)

    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    let a = estPairOuImpair(n1)

    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice7', (req, res) => {
    const n1 = req.body.n1
    let a = celsiusEnFahrenheit(n1)

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(n1 === null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice8', (req, res) => {
    const n1 = req.body.n1
    let a = aireCercle(n1)

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice9', (req, res) => {
    const n1 = req.body.n1

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    
    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = estPalindrome(n1)    

    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2  == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(!n1 || !n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice1', (req, res) => {
    let a = dateIlYADixAns()
    return res.json([{ reponse:  a}]);
});

app.post('/s2/exercice2', (req, res) => {
    const { n1 } = req.body

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);   
    }

    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);   
    }

    let a = formaterDate(n1)
    
    return res.json([{ reponse: a}]);
});

app.post('/s2/exercice3', (req, res) => {
    const { n1, n2 } = req.body;

    if(n1 == null || n2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    if(!n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    let a = differenceEnJours(n1, n2)

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice4', (req, res) => {
    const {n1, n2} = req.body

    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    if(n2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);   
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    if(!n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);   
    }


    let a = ajouterJours(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice5', (req, res) => {
    const n1 = req.body.n1

    if(n1 == null || !n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    let a = estAnneeBissextile(n1)

    return res.json([{ reponse: a}]);
});

app.post('/s2/exercice6', (req, res) => {
    const n1 = req.body.n1
    if(n1 == null || !n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    let a = premierJourDuMois(n1)

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice7', (req, res) => {
    const n1 = req.body.n1
    
    if(n1 == null || !n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);   
    }

    let a = dernierJourDuMois(n1);


    
    return res.json([{ reponse: a}]);
});

app.post('/s2/exercice8', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }
    
    if(!n2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un nombre valide" }]);
    }

    let a = formaterDuree(n1, n2)

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice9', (req, res) => {
    const {begin1, begin2, end1, end2} = req.body

    
    if(begin1 == null || begin2 == null || end1 == null || end2 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer un date valide" }]);
    }

    if(!begin1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un date valide" }]);
    }
    
    if(!begin2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un date valide" }]);
    }

    if(!end1) {
        return res.status(400).json([{ reponse: "Veuillez entrer un date valide" }]);
    }

    if(!end2) {
        return res.status(400).json([{ reponse: "Veuillez entrer un date valide" }]);
    }

    let a = chevauchementDates(begin1, end1, begin2, end2)

    return res.json([{ reponse: a }]);
});

app.post('/s2/exercice10', (req, res) => {
    const { n1, n2 } = req.body
    
    if(n1 == null) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
    }

    if(!n1) {
        return res.status(400).json([{ reponse: "Veuillez entrer une date valide" }]);
    }
    

    let a = calculerAge(n1)

    return res.json([{ reponse: a }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


