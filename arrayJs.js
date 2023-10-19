const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  let elephante = users.filter(function(user){
        return user.favoriteAnimal === "Penguin"
    }
  );

  elephante;

//   function filter(collection) {
//     for (const user of collection) {
//       if (likesElephants(user)) {
//         console.log(user.firstName);
//       }
//     }
//   }
  
  //This is the comparison logic into a separate function
//   function filter(collection, cb) {
//     const newCollection = 
//     for (const user of collection) {
//       if (cb(user)) {
//         newCollection.push(user);
//       }
//     }
//     return newCollection
//   }

//The function here begins the last part of the lesson
//THIS IS ESSENTIALLY A CLONE OF JAVASCRIPTS BUILT IN ARRAY.FILTER() METHOD
// const bluePenguinUsers = filter(users, function(user){
//     return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
// });

// bluePenguinUsers;

// const yellowUsers = filter(users, function(users){
//     return user.favoriteColor === "Yellow"
// });

// yellowUsers;

// users.length;

//Example of the array.prototype.filter()
// [1, 2, 3, 4, 5].filter(function (num) {
//     return num > 3;
//   });


// Addtional fucntions below for the filter().
//   filter(users, function (user) {
//     return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
//   });
//   // LOG: Josh
//   // LOG: Avidor
  
//   filter(users, function (user) {
//     return user.favoriteColor === "Yellow";
//   });
//   // LOG: Tracy
//   // LOG: Drew

//   filter(users, function(user) {
//     return user.favoriteAnimal === "Penguin" && user.favoriteColor === "Blue"
//   })

  //Example of a an impure function
//   function randomMultiplyAndFloor() {
//     return Math.floor(Math.random() * 100);
//   }
  
//   randomMultiplyAndFloor();
  // => 53
//   randomMultiplyAndFloor();
  // => 66

  //This one is impure b/c it alters the passed in object
//   const ada = {
//     name: "Ada Lovelace",
//     age: 202,
//   };
  
//   function happyBirthday(person) {
//     console.log(
//       `Happy birthday, ${person.name}! You're ${++person.age} years old!`
//     );
//   }
  
//   happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
//   happyBirthday(ada);
  // LOG: Happy birthday, Ada Lovelace! You're 204 years old!
  
//   ada;
  // => {name: "Ada Lovelace", age: 204}


  //A pure take on the randomMultiplyAndFloor function
//   function multiplyAndFloor(num) {
//     return Math.floor(num * 100);
//   }
  
//   const randNum = Math.random();
  
//   randNum;
  // => 0.9123939589869237
  
//   multiplyAndFloor(randNum);
  // => 91
//   multiplyAndFloor(randNum);
  // => 91


//   And one that returns a new object instead of mutating the passed-in object:
// const adaAge202 = {
//     name: "Ada Lovelace",
//     age: 202,
//   };
  
//   function happyBirthday(person) {
//     const newPerson = Object.assign({}, person, { age: person.age + 1 });
  
//     console.log(
//       `Happy birthday, ${newPerson.name}! You're ${newPerson.age} years old!`
//     );
  
//     return newPerson;
//   }
  
//   const adaAge203 = happyBirthday(adaAge202);
  // LOG: Happy birthday, Ada Lovelace! You're 203 years old!
  
//   adaAge202;
  // => {name: "Ada Lovelace", age: 202}
  
//   adaAge203;
  // => {name: "Ada Lovelace", age: 203}

