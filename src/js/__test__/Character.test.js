import Bowman from '../Bowman';
import Character from '../Character';

test('Must correctly create an object of the base class', () => {
  const expected = {
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
  };
  expect(new Character('Test', 'Bowman')).toEqual(expected);
});

test('if name is not a string should throw an error', () => {
  expect(() => new Character(1, 'Bowman')).toThrowError('The name must be a string');
});

test('if the name is not between 2 and 10 characters should throw error', () => {
  expect(() => new Character('T', 'Bowman')).toThrowError('The name must be between 2 and 10 characters!');
  expect(() => new Character('abracadabra')).toThrowError('The name must be between 2 and 10 characters!');
});

test('if the character is not on the list, throws an error', () => {
  expect(() => new Character('abracad')).toThrowError('The type must be selected from the list of suggested types!');
});

test('The listOfTypes method should return an array of character type names', () => {
  expect(Character.listOfTypes()).toEqual(['Bowman', 'Swordsman', 'Magician', 'Deamon', 'Undead', 'Zombie']);
});

test('The levelUP method should increase the indicators in the Character instance', () => {
  const Test = new Character('John', 'Bowman');
  Test.levelUP();
  expect(Test.level).toBe(2);
  expect(Test.health).toBe(100);
});

test('The LevelUp method should throw an error if health = 0', () => {
  const Test = new Character('Test', 'Bowman');
  Test.health = 0;
  expect(() => Test.levelUP()).toThrowError('Нельзя повысить левел умершего');
});

test('if health = 0, output health = 0', () => {
  const Test = new Character('Test', 'Bowman');
  Test.health = 0;
  Test.damage(30);
  expect(Test.health).toBe(0);
});

test('if health > 0 , output health must be correct', () => {
  const test = new Bowman('Test');
  test.damage(30);
  expect(test.health).toBe(77.5);
});

test('if health became negative, output health must be 0', () => {
  const test = new Bowman('Test');
  test.damage(200);
  expect(test.health).toBe(0);
});