class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.heroClass = ["mago", "guerreiro", "monge", "ninja"]
        this.heroAtack = ["magia", "espada", "artes marciais", "shuriken"]
        this.type = type % this.heroClass.length;
        }

    getHeroClass() {
        return this.heroClass[this.type];
    }

    getAttack() {
        return this.heroAtack[this.type];
    }

    attack() {
        console.log(`O ${this.getHeroClass()} atacou usando ${this.getAttack()}`);
    }
}
    
for(let i = 0; i < 4; i++) {
    let newHero = new hero("Tartarus", 28, i);
    newHero.attack();
}