export default class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error('Такой персонаж уже eсть в команде');
      }
      this.members.add(character);
    }
  
    addAll(characters) {
      this.members = new Set([...this.members, ...characters]);
    }
  
    toArray() {
      return [...this.members];
    }
}