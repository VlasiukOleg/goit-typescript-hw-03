
class Key {

    constructor(private signature: number) {
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }
}


class Person {

    constructor(private key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}

abstract class House {

    constructor(protected door: boolean,  protected key: Key, protected tenants: Person[]) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
            console.log('Person entered the house.');
        } else {
            console.log('The door is closed.');
        }
    }

    abstract openDoor(key: Key): void;

}





const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};