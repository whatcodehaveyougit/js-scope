// let murderer = "Jimmy";
//
// function changeMurdurer(person) {
//   murderer = "John";
// }
//
// console.log(murderer);
// Jimmy as John is in function scope

// Episode 2

const murderer = {
  name: "John",
  weapon: "Gun"
};

function changeMurdurer(person) {
  if (murderer.weapon == "Gun") {
    murderer.name = "Harry";
  }
  function plotTwist() {
    let murderer_two = "James";
  }
  plotTwist();
  function anotherTwist() {
    murderer.name = "Guy";
  }
  anotherTwist();
}

changeMurdurer();
console.log(murderer.name);

// console.log(murderer_two); Can't be access due to function / block scope
