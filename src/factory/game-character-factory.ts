/*
 * FACTORY - Single Responsibility + Open/Closed
 */

import { GameCharacter } from "./game-character";

export class GameCharacterFactory {
  public static getWarrior(level: number): GameCharacter {
    if (level < 10) {
      return { dexterity: 5, health: 5, magic: 5, strength: 5 };
    } else return { dexterity: 8, health: 8, magic: 8, strength: 8 };
  }

  public static getMage(level: number): GameCharacter {
    if (level < 10) {
      return { dexterity: 3, health: 3, magic: 3, strength: 3 };
    } else return { dexterity: 5, health: 5, magic: 5, strength: 5 };
  }
}

let warrior_at_6 = GameCharacterFactory.getWarrior(6);
let mage_at_12 = GameCharacterFactory.getMage(12);

console.log(warrior_at_6);
console.log(mage_at_12);
