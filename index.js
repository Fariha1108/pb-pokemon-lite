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
        
        // da jedes Pokemon von class pokemon ertellt wird, hat auch jedes Pokemon seine eigene leere Array.
        this.skills = [];
    }
    learnAttackSkill(attackObj)
    {
        // pusht die erlernte Attacke zu der leeren Array.
        this.skills.push(attackObj);

        console.log(`${this.name} has lerned  the skill ${attackObj.attack} successfully.`);
    }
    showStatus()
    {
        //zeigt den aktuellen status des Pokemons
        if(this.health > 0)
        {
            console.log(`${this.name} status \nhealth: ${this.health} \nmagic: ${this.magic}`);
        }
        else(this.health < 0)
        {
            console.log(`${this.name} is already dead!`);
        }
    }
    attack(index, opponent)
    {
        // prüft zuerts, ob der Pokemon genug Magic hat um die Attacke zu führen 
        if(this.magic >= this.skills[index].magic) 
        {
            // reduziert die Magic des Pokemons um die Summe, die für die Attacke benötigt wurde
            this.magic -= this.skills[index].magic;

            // reduziert das Health des Pokemons um die Summe, die der Schaden angerichtet hat
            opponent.health -= this.skills[index].damage;

            console.log(`${this.name} launched skill ${this.skills[index].attack} successfully! \n${opponent.name} got ${this.skills[index].damage} damage`);
        }
        // wenn der Gegners Leben kleiner ist als 0, dann ist er tot
        else(opponent.health < 0)
        {
            console.log(`${opponent.name} is killed!`);
        }
    }
    getMagic()
    {
        if(this.magic < this.skills[0].magic)
        {
            console.log(`${this.name} has not enough magic, cannot launch attack!`);
            this.magic = this.magic + 20;
            console.log(`${this.name} got 20 magic back`);
        }
    }
}

divider('Erstellte Pokemone:');

const pikachu = new Pokemon('Pikachu',120, 80);
console.log(pikachu);

const bulbasaur = new Pokemon("Bulbasaur", 95, 105);
console.log(bulbasaur);

const charizard = new Pokemon('Charizard', 150, 80);
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

const blastBurn = new AttackSkill('blast burn', 60, 30);
console.log(blastBurn);

const bubble = new AttackSkill('bubble', 25, 10);
console.log(bubble);

divider('Pokemone mit ihren Attacken:');

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

divider('Status anzeigen:');

pikachu.showStatus();
console.log('\n');
bulbasaur.showStatus();

divider('Kampfstart: 1. Angriff:');

pikachu.attack(0, bulbasaur);

divider('2. Angriff:');

bulbasaur.attack(0, pikachu);

divider('Status anzeigen:');

pikachu.showStatus();
console.log('\n');
bulbasaur.showStatus();

divider('3. Angriff:');

pikachu.attack(0, bulbasaur);

divider('Magic aufladen:')

pikachu.getMagic();

divider('4. Angriff:');

pikachu.attack(0, bulbasaur);



