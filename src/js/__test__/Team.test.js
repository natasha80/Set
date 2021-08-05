import Bowman from '../Bowman';
import Deamon from '../Deamon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Team from '../Team';
import Undead from '../Undead';
import Zombie from '../Zombie';

const player1 = new Bowman('Alex');
const player2 = new Deamon('John');
const player3 = new Magician('Mark');
const player4 = new Swordsman('Jack');
const player5 = new Undead('Sveta');
const player6 = new Zombie('Olga');

test('В инстансе класса Team в контейнере members должен появиться 1 объект с данными переданного в метод персонажа', () => {
  const team = new Team();
  team.add(player6);
  const expected = {
    name: 'Olga',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const Test = new Set();
  Test.add(expected);
  expect(team.members).toEqual(Test);
});

test('При добавлении игрока , если в контейнере этот игрок уже есть , должен произойти выброс ошибки', () => {
  const team = new Team();
  team.add(player1);
  expect(() => team.add(player1)).toThrowError('Такой персонаж уже eсть в команде');
});

test('В инстансе класса Team в контейнере members должны появиться объекты всех персонажей', () => {
  const team = new Team();
  const Test = new Set([player1, player2, player3, player4, player5, player6]);
  team.addAll([player1, player2, player3, player4, player5, player6]);
  expect(team.members).toEqual(Test);
});

test('В инстансе класса Team в контейнере members должно появиться 3 объекта ', () => {
  const team = new Team();
  team.addAll([player1, player2, player3]);
  expect(team.members.size).toBe(3);
});

test('При передаче дублей в метод addAll, не должно быть ошибки и в инстансе не дожно быть дублей', () => {
  const team = new Team();
  team.addAll([player1, player2, player3, player1, player2, player3]);
  expect(team.members.size).toBe(3);
});

test('Метод toArray должен производить конвертацию Set в массив.', () => {
  const team = new Team();
  team.addAll([player1, player2, player3, player4, player5, player6]);
  expect(team.toArray()).toEqual([player1, player2, player3, player4, player5, player6]);
});