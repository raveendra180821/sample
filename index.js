/*
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: 'John' };
  
  // Using call to pass arguments individually
  greet.call(person, 'Hello', '!');
*/

/*
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
  }
  
  const person = { name: 'John' };
  
  // Using bind to create a new function with pre-filled arguments
  const greetJohn = greet.bind(person, 'Hello');
  greetJohn(); // Output: Hello, John
  
  */

  /*

function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
  
  const person = { name: 'John' };
  
  // Using bind to create a new function with pre-filled arguments
  const greetJohn = greet.bind(person, 'Hello');
  greetJohn(); // Output: Hello, John!
  
  */

  /*

  const obj = {
    value: 42,
    getValue:  function(){ 
        console.log(this.value)
    }
  };
  
  obj.getValue();

  */

  /*
  const obj = {
    value: 42,
    getValue:  () => 
        console.log(this.value)
  };
  
  obj.getValue();
*/

/*
const obj = {
    value: 42,
    getValue: function () {
      return () => {
        console.log(this.value);
      };
    },
  };
  
  const arrowFunction = obj.getValue();
  arrowFunction(); // Output: 42

*/