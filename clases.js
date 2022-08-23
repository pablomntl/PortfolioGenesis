class Animal {
    hablar() {
        return "Cuack"
    }
}

//creacion de  objeto  
const pato = new Animal();
console.log(pato.hablar());

class Vehiculo {
    acelerar () {
        return "he acelerado"
    }
}

const ferrari = new Vehiculo();
console.log(ferrari.acelerar());