class Pet {
  constructor(props) {
    this.props = props;
  }

  getName() {
    return this.props.name;
  }

  getSpecies() {
    return this.props.species;
  }

  getSpeech() {
    return "I make this sound: ";
  }

  getIdentity = () => {
    console.log(this);
  };
}

class Cat extends Pet {
  constructor(props) {
    super(props);
    this.props.species = "cat";
  }

  getSpeech() {
    return super.getSpeech() + "Meow!";
  }
}

class Dog extends Pet {
  constructor(props) {
    super(props);
    this.props.species = "dog";
  }

  getSpeech() {
    return super.getSpeech() + "Woof!";
  }
}

function sayName(pet) {
  console.log(`My name is ${pet.getName()}, and I am a ${pet.getSpecies()}`);
  console.log(`${pet.getSpeech()}`);
}

var myPet = new Cat({ name: "Luna" });
sayName(myPet);
myPet.getIdentity();
// Assign method getIdentity to the variable myIdentity
var myIdentity = myPet.getIdentity();
//Call the new function
myIdentity();

var myDog = new Dog({ name: "Fido" });
sayName(myDog);
myDog.getIdentity();
