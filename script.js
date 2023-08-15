// const players = ["John", "Bob", "Alice", "Poppy"];

// const person = {
//   name: "John Doe",
//   age: 80,
// };

// // Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

// window.players = players;
// window.person = person;
// window.team = team;
// window.team1 = team1;
// window.cap1 = cap1;




// <script>
  // Given array and object
  let players = ['John','Alice', 'Bob', 'Charlie'];
  let person = {
    name: 'John',
    age: 30,
    gender: 'male'
  };

  // Create a reference to the players array
  let team = players;

  // Create a copy of the players array
  let team1 = players.slice();

  // Create a copy of the person object
  let cap1 = { ...person };

  // Print the results
  console.log('Original players array:', players);
  console.log('Team array (reference):', team);
  console.log('Team1 array (copy):', team1);
  console.log('Original person object:', person);
  console.log('Cap1 object (copy):', cap1);
// </script>
