const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});

describe("POST /s1/exercice1", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: undefined, n2: 2 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: undefined, n2: 5 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: 5, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });



    test("Calcule correctement la somme de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 3 }]);
    });
});
  
describe("POST /s1/exercice2", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice2")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });

    test("Renvoie une erreur si n1 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: undefined, n2: 8 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: 6, n2: undefined });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

  
    test("Calcule correctement la soustraction de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice2").send({ n1: 3, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 1 }]);
    });
})
  
describe("POST /s1/exercice3", () => {
    test("Renvoie une erreur si n1 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n2 est null", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: 1, n2: null });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });
    
      test("Renvoie une erreur si n1 et n2 sont null", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: null, n2: null });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });

      test("Renvoie une erreur si n1 et n2 sont undefined", async () => {
        const res = await request(app)
          .post("/s1/exercice3")
          .send({ n1: undefined, n2: undefined });
        expect(res.statusCode).toBe(400);
        expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
      });
          
      test("Calcule correctement la mutliplication de n1 et n2", async () => {
        const res = await request(app).post("/s1/exercice3").send({ n1: 3, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 6 }]);
      });
})

describe("POST /s1/exercice4", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: undefined, n2: 15 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: 55, n2: undefined });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Calcule correctement la division de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice4").send({ n1: 6, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 3 }]);
    });
})

describe("POST /s1/exercice5", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: null});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  
  test("Renvoie une erreur est undefined", async () => {
    const res = await request(app)
    .post("/s1/exercice5")
    .send({ n1: undefined});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });
  
    
  
  test("Calcule correctement le factorielle de 1", async () => {
      const res = await request(app).post("/s1/exercice5").send({ n1: 1});
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 1 }]);
  });



  test("Calcule correctement le factorielle", async () => {
      const res = await request(app).post("/s1/exercice5").send({ n1: 5 })
      expect(res.status).toBe(200);
      expect(res.body).toEqual([{reponse: 120}])
  });
})

describe("POST /s1/exercice6", () => {
  test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice6")
        .send({ n1: null});
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
    
    test("Renvoie une erreur si n1 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice6")
        .send({ n1: undefined});
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

  test("Vérifie correctement si le nombre est paire ou impaire", async () => {
      const res = await request(app).post("/s1/exercice6").send({ n1: 5 })
      expect(res.status).toBe(200);
      expect(res.body).toEqual([{reponse: 'impair'}])
  });
})

describe("POST /s1/exercice7", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: null});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: undefined});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Convertie correctement la temperature de C° en F° ", async () => {
      const res = await request(app).post("/s1/exercice7").send({ n1: 5 })
      expect(res.status).toBe(200);
      expect(res.body).toEqual([{reponse: 41}])
  });
})

describe("POST /s1/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: null});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: undefined});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Calcule correctement l'air d'un cercle", async () => {
      const res = await request(app).post("/s1/exercice8").send({ n1: 5 })
      expect(res.status).toBe(200);
      expect(res.body).toEqual([{reponse:  78.53981633974483}])
  });
})

describe("POST /s1/exercice9", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice9")
      .send({ n1: null});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est undefined", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: undefined});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });


  test("Renvoi que oui c'est un palindrome", async () => {
      const res = await request(app).post("/s1/exercice9").send({ n1: "kayak" })
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([{reponse:  true}])
  });
  test("Renvoi que non ça n'est pas un palindrome", async () => {
    const res = await request(app).post("/s1/exercice9").send({ n1: "test" })
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{reponse:  false}])
  });
})


describe("POST /s1/exercice10", () => {
  test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice10")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice10")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice10")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    
    test("Renvoie une erreur si n1 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice10")
        .send({ n1: undefined, n2: 5});
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice10")
        .send({ n1: 5, n2: undefined});
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 est undefined", async () => {
      const res = await request(app)
        .post("/s1/exercice10")
        .send({ n1: undefined, n2: undefined});
      expect(res.statusCode).toBe(400);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Calcule correctement le PGCD de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice10").send({ n1: 3, n2: 2 });
     
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 1 }]);
    });
})

describe('POST /s2/exercice1', () => {
  test("Calcule correctement la date", async () => {
    
    const res = await request(app).post("/s2/exercice1")

    const date = new Date()

    const expetedDate = date.getFullYear()-10 + "-" + date.getMonth() + "-" + date.getDay()
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual([{reponse:expetedDate}]);
  })
})


describe('POST /s2/exercice2', () => {
  test("Renvoie une erreur si n1 est null", async() => {
    const res = await request(app).post("/s2/exercice2").send({n1 : null})
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide"}]);
  })

  test("Renvoie une erreur si n1 est undefined", async() => {
    const res = await request(app).post("/s2/exercice2").send({n1 : undefined})
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide"}]);
  })

  test("Calcule correctement la date", async () => {
    const date = "2022-07-21"
    
    const res = await request(app).post("/s2/exercice2").send({n1 : date})
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual([{reponse: "21/07/2022"}]);
  })
})

describe('POST /s2/exercice3', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s2/exercice3").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app).post("/s2/exercice3").send({n2: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoi une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s2/exercice3").send({n1: undefined, n2: "2024-07-26"});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  test("Renvoi une erreur si n2 est undefined", async () => {
    const res = await request(app).post("/s2/exercice3").send({n1: "2024-07-8", n2: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  
  test("Renvoi une erreur si n1 et n2 sont undefined", async () => {
    const res = await request(app).post("/s2/exercice3").send({n1: undefined, n2: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })

  test("Calcule correctement la différence entre les 2 dates", async ()=> {
    const res = await request(app).post("/s2/exercice3").send({n1: "2024-07-26", n2: "2023-07-26"})
    expect(res.body).toEqual([{ reponse: 366}])
  })
})

describe('POST /s2/exercice4', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s2/exercice4").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app).post("/s2/exercice4").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoi une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s2/exercice4").send({n1: undefined, n2: "2024-07-26"});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  test("Renvoi une erreur si n2 est undefined", async () => {
    const res = await request(app).post("/s2/exercice4").send({n1: "2024-07-8", n2: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide"}]);
  })


  test("Calcule correctement la nouvelle date", async ()=> {
    const res = await request(app).post("/s2/exercice4").send({n1: "2024-07-26", n2: 4})
    expect(res.body).toEqual([{ reponse: "2024-07-30"}])
  })
})


describe('POST /s2/exercice5', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s2/exercice5").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoi une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s2/exercice5").send({n1: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  test("Calcule correctement la nouvelle date", async ()=> {
    const res = await request(app).post("/s2/exercice5").send({n1: "2027-07-26"})
    expect(res.body).toEqual([{ reponse: false}])
  })
})

describe('POST /s2/exercice6', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s2/exercice6").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoi une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s2/exercice6").send({n1: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  test("Calcule correctement le premier jour du mois", async ()=> {
    const res = await request(app).post("/s2/exercice6").send({n1: "2023-07-25"})
    expect(res.body).toEqual([{ reponse: "2023-07-01"}])
  })
})

describe('POST /s2/exercice7', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s2/exercice7").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoi une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s2/exercice7").send({n1: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  test("Calcule correctement le dernier jour du mois", async ()=> {
    const res = await request(app).post("/s2/exercice7").send({n1: "2027-07-26"})
    expect(res.body).toEqual([{ reponse: "2027-07-31"}])
  })
})


describe("POST /s2/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: undefined, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });


  test("Renvoie une erreur si n1  sont undefined", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: undefined, n2: 15 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1  sont undefined", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: 5, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Formate correctement la durée", async () => {
    const res = await request(app).post("/s2/exercice8").send({ n1: 1, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "01:02" }]);
  });
});



describe("POST /s2/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: undefined, n2: 2 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });


  test("Renvoie une erreur si n1  sont undefined", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: undefined, n2: 15 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Renvoie une erreur si n1  sont undefined", async () => {
    const res = await request(app)
      .post("/s2/exercice8")
      .send({ n1: 5, n2: undefined });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
  });

  test("Formate correctement la durée", async () => {
    const res = await request(app).post("/s2/exercice8").send({ n1: 1, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "01:02" }]);
  });
});



describe('POST /s2/exercice10', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app).post("/s2/exercice10").send({n1: null})

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);  
  })

  test("Renvoi une erreur si n1 est undefined", async () => {
    const res = await request(app).post("/s2/exercice10").send({n1: undefined});

    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual([{ reponse: "Veuillez entrer une date valide"}]);
  })
  test("Calcule correctement la nouvelle date", async ()=> {
    const res = await request(app).post("/s2/exercice10").send({n1: "2000-07-26"})
    expect(res.body).toEqual([{ reponse: 23}])
  })
})