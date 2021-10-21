function divider(input)
{
    console.log("\n" + "=".repeat(20), input, "=".repeat(20), "\n");
}

// Vorlage für die Erstellung der Pokemone
class Pokemon
{
    constructor(name, health, magic)
    {
        this.name = name;
        this.health = health;
        this.magic = magic;
        
        // da jedes Pokemon von class Pokemon ertellt wird, hat auch jedes Pokemon seine eigene leere Array.
        this.skills = [];
    }
    learnAttackSkill(attackObj)
    {
        // pusht die erlernte Attacke zu der leeren Array.
        this.skills.push(attackObj);

        console.log(`${this.name} has lerned  the skill ${attackObj.attack} successfully.`);
    }
    //zeigt den aktuellen status des Pokemons
    showStatus()
    {
        // wenn Pokemons health größer ist als 0
        if(this.health > 0)
        {
            console.log(`${this.name} status \nhealth: ${this.health} \nmagic: ${this.magic}`);
        }
        else if(this.health <= 0)
        {
            console.log(`${this.name} is already dead!`);
        }
    }
    attack(index, opponent)
    {
        // prüft zuerts, ob der Pokemon genug Magic hat um die Attacke zu führen 
        if((this.magic >= this.skills[index].magic) && (this.health > 0)) 
        {
            // reduziert die Magic des Pokemons um die Summe, die für die Attacke benötigt wurde
            this.magic -= this.skills[index].magic;

            // reduziert das Health des Gegners um die Summe, die der Schaden angerichtet hat
            opponent.health -= this.skills[index].damage;

            console.log(`${this.name} launched skill ${this.skills[index].attack} successfully! \n${opponent.name} got ${this.skills[index].damage} damage`);
        }
        // wenn der Gegners health kleiner ist als 0 oder gleich 0 ist
        else if(opponent.health <= 0)
        {
            console.log(`${opponent.name} is killed!`);
        }
        // wenn Pokemons health kleiner ist als 0 oder 0 ist 
        else if(this.health <= 0)
        {
            console.log(`${this.name} can\'t attack, he is already dead! \n${opponent.name} has won this round`);
        }
    }
    getMagic(input)
    {
        if(this.magic < this.skills[0].magic)
        {
            console.log(`${this.name} has not enough magic, cannot launch attack!`);
            this.magic += input;
            console.log(`${this.name} got ${input} magic back`);
        }
    }
}

divider('Erstellte Pokemone:');

const pikachu = new Pokemon('Pikachu',120, 80);
console.log(pikachu);

const bulbasaur = new Pokemon("Bulbasaur", 95, 105);
console.log(bulbasaur);

const charizard = new Pokemon('Charizard', 150, 100);
console.log(charizard);

const squirtle = new Pokemon('Squirtle', 90, 100);
console.log(squirtle);

// Vorlage für die Erstellung der Attacken
class AttackSkill
{
    
    constructor(attack, damage, magic)
    {
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    }
}

divider('Erstellte Attacken:');

const lightning = new AttackSkill("lightning", 40, 30);
console.log(lightning);

const poisonSeed = new AttackSkill("poison seed", 20, 20);
console.log(poisonSeed);

const blastBurn = new AttackSkill('blast burn', 60, 40);
console.log(blastBurn);

const bubble = new AttackSkill('bubble', 25, 10);
console.log(bubble);

divider('Pokemone mit ihren gelernten Attacken:');

pikachu.learnAttackSkill(lightning);
//console.log(pikachu.skills);

bulbasaur.learnAttackSkill(poisonSeed);
//console.log(bulbasaur.skills);

charizard.learnAttackSkill(blastBurn);
//console.log(charizard.skills);

squirtle.learnAttackSkill(bubble);
//console.log(squirtle.skills);

divider('Skills:');

console.log(pikachu.skills);
console.log(bulbasaur.skills);
console.log(charizard.skills);
console.log(squirtle.skills);

divider('Round 1 => Pikachu vs Bulbasaur:');

divider('Status anzeigen:');

pikachu.showStatus();
console.log('\n');
bulbasaur.showStatus();

divider('Kampfstart:');

pikachu.attack(0, bulbasaur);

console.log('='.repeat(55));

bulbasaur.attack(0, pikachu);

divider('Status anzeigen:');

pikachu.showStatus();
console.log('\n');
bulbasaur.showStatus();

divider('weiterer Angriff:')

pikachu.attack(0, bulbasaur);

divider('Magic aufladen:')

pikachu.getMagic(20);

divider('weiterer Angriff:')

pikachu.attack(0, bulbasaur);

console.log('='.repeat(55));

bulbasaur.attack(0, pikachu);

divider('Round 2 => Pikachu vs Charizard:');

pikachu.getMagic(70);

divider('Status anzeigen:');

pikachu.showStatus();
console.log('\n');
charizard.showStatus();

divider('Kampfstart:');

charizard.attack(0, pikachu);

console.log('='.repeat(55));

pikachu.attack(0, charizard);

divider('Status anzeigen:');

charizard.showStatus();
console.log('\n');
pikachu.showStatus();

divider('weiterer Angriff:')

charizard.attack(0, pikachu);

console.log('='.repeat(55));

pikachu.attack(0, charizard);

divider('Round 3 => Charizard vs Squirtle:');

charizard.getMagic(80);

divider('Status anzeigen:');

charizard.showStatus();
console.log('\n');
squirtle.showStatus();

divider('Kampfstart:');

squirtle.attack(0, charizard);

console.log('='.repeat(55));

charizard.attack(0, squirtle);

divider('Status anzeigen:');

charizard.showStatus();
console.log('\n');
squirtle.showStatus();

divider('weiterer Angriff:')

squirtle.attack(0, charizard);

console.log('='.repeat(55));

charizard.attack(0, squirtle);

console.log('='.repeat(55));

squirtle.attack(0, charizard);


