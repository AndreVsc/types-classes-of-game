class GameHero {
    nome: string;
    idade: number;
    tipo: string;

    constructor(nome: string, idade: number, tipo: string) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(): string {
        let ataque: string;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magic';
                break;
            case 'guerreiro':
                ataque = 'sword';
                break;
            case 'monge':
                ataque = 'martial arts';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'unknown attack';
                break;
        }

        return `The ${this.tipo} attacked using ${ataque}`;
    }
}

const hero1 = new GameHero('Gandalf', 300, 'Mago');
console.log(hero1.atacar());

const hero2 = new GameHero('Aragorn', 87, 'Guerreiro');
console.log(hero2.atacar());

const hero3 = new GameHero('Shifu', 60, 'Monge');
console.log(hero3.atacar());

const hero4 = new GameHero('Naruto', 20, 'Ninja');
console.log(hero4.atacar());
export { GameHero };