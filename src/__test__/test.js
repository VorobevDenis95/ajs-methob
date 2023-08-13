import Character from '../classes/character';
import { Bowman } from '../classes/bowman';
import { Daemon } from '../classes/daemon';
import { Magician } from '../classes/magician';
import { Swordsman } from '../classes/swordsman';
import { Undead } from '../classes/undead';
import { Zombie } from '../classes/zombie';

test('classBowman', () => {
  const bowman = new Bowman('Ivan', 'Bowman');
  expect(bowman).toEqual({
    name: 'Ivan',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('classSwordsman', () => {
  const swordsman = new Swordsman('Ivan', 'Swordsman');
  expect(swordsman).toEqual({
    name: 'Ivan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('classMagician', () => {
  const magician = new Magician('Ivan', 'Magician');

  expect(magician).toEqual({
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
test('classUndead', () => {
  const undead = new Undead('Ivan', 'Undead');
  expect(undead).toEqual({
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
test('classZombie', () => {
  const zombie = new Zombie('Ivan', 'Zombie');

  expect(zombie).toEqual({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('classDaemon', () => {
  const daemon = new Daemon('Ivan', 'Daemon');

  expect(daemon).toEqual({
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('classCharacter', () => {
  const character = new Character('Ivan', 'Zombie');

  expect(character).toEqual({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
  });
});

test('errorSymbol', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const character = new Character('A', 'Bowman');
  }).toThrow('Имя не должно быть менее 2х или более 10 символов');
});

test('errorType', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const character = new Character('Andrew', 'Ivan');
  }).toThrow('Данный тип несуществует');
});

test('levelUpTest1', () => {
  const hero = new Magician('Ivan', 'Magician');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('levelUpTest2', () => {
  expect(() => {
    const hero = new Magician('Ivan', 'Magician');
    hero.health = 0;
    hero.levelUp();
  }).toThrow('Нельзя повысить уровень умершего');
});

test('damageTest1', () => {
  const hero = new Zombie('Ivan', 'Zombie');
  hero.damage(10);
  expect(hero).toEqual({
    name: 'Ivan',
    type: 'Zombie',
    health: 91,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
