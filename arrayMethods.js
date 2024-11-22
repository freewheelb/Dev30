// ARRAY METHODS

//forEach
var saveUser = function (user) {
    console.log('saving', user.name);
  }
  
  var saveUsers = function () {
    var users = [
      { id: 15, name: 'Bob' },
      { id: 23, name: 'Jimbo' },
      { id: 35, name: 'Cathy' }
    ];
  
    users.forEach ((u) =>{
        console.log(u)
    });

    // for (var i = 0; i < users.length; i++) {
    //   saveUser(users[i]);
    //   console.log(users[i]);
  };
 //************************************************************
// Calculating volumes using forEach
  var boxes = [
    { length: 10, width: 15, height: 20 },
    { length: 15, width: 20, height: 25 },
    { length: 20, width: 25, height: 30 },
    { length: 25, width: 30, height: 35 },
    { length: 30, width: 35, height: 40 },
  ];
  
  var volumes = [];

  boxes.forEach((v) => {
    const vol = v.length * v.width * v.height;
    volumes.push(vol);
  });

  console.log(volumes);
//************************************************************
//************************************************************
// MAP
var budgets = [
    {title:'Rent', amount: 1200},
    {title: 'Groceries', amount: 300},
    {title: 'Phone', amount: 50},
    {title: 'Gas', amount: 200},
    {title: 'Internet', amount: 45},
];

var budgetString = budgets.map((item) => {
    return `${item.title} (${item.amount})`;
});
// console.log(budgetString);
//************************************************************
var boxes = [
    { length: 10, width: 15, height: 20 },
    { length: 15, width: 20, height: 25 },
    { length: 20, width: 25, height: 30 },
    { length: 25, width: 30, height: 35 },
    { length: 30, width: 35, height: 40 },
  ];
  
  var lengths = boxes.map((dimL) => {
    return `${dimL.length}`;
  });
console.log(lengths);

  var volumes = boxes.map((dim)=>{
    return dim.length * dim.width * dim.height;
  });
  console.log(volumes);
//************************************************************
var users = [
    { id: 1, name: "Bob", email: "bob@gmail.com" },
    { id: 2, name: "Cindy", email: "cindy@gmail.com" },
    { id: 3, name: "Susan", email: "susan@gmail.com" },
    { id: 4, name: "Sarah", email: "sarah@gmail.com" },
    { id: 5, name: "Tim", email: "tim@gmail.com" },
  ];

//   NAMED ARRAY TO STAY GENERIC AND REUSABLE WITH OTHER DATA
  var pluck = ((array, property) => {
    // (element) REPRESENTS EACH ELEMENT AS THE METHOD ITERATES THROUGH THE ARRAY
    // element[property] ACCESSES THE VALUE OF THE PROPERTY PARAMETER.
    return array.map((element) => element[property]);
  });
  
  var emails = pluck(users, "email"); 

  console.log(emails);
//************************************************************
//************************************************************
// FIND
var users = [
    { id: 1, username: 'Susan19', admin: false },
    { id: 2, username: 'Antonio10', admin: false },
    { id: 3, username: 'Fred15', admin: true },
    { id: 4, username: 'Tim43', admin: false },
    { id: 5, username: 'JimBob59', admin: true },
    { id: 6, username: 'Clark6', admin: false },
    { id: 7, username: 'Jameson35', admin: true },
    { id: 8, username: 'Jessica40', admin: false },
    { id: 9, username: 'Jaleesa13', admin: false },
    { id: 10, username: 'Yoni45', admin: false }
  ]

let locate = 'JimBob59';
var selectedUser = users.find((user) => {
  return user.username === locate;
});
//************************************************************
const shoes = [
    { name: 'Nike', price: 200 },
    { name: 'Red Wings', price: 250 },
    { name: 'Vans', price: 150 },
    { name: 'Converse', price: 160 },
    { name: 'Reebok', price: 130 },
    { name: 'New Balance', price: 175 },
    { name: 'Adidas', price: 95 },
    { name: 'Keds', price: 140 },
    { name: 'Crocs', price: 135 }
  ];

  let retailPrice = 100;
  
  let lessThan100 = shoes.find((item) => {
    return item.price < retailPrice;
  });
console.log(lessThan100);
//************************************************************
//************************************************************
// EVERY / SOME
var shoes = [
    { name: 'Nike', price: 200 },
    { name: 'Red Wings', price: 250 },
    { name: 'Vans', price: 50 },
    { name: 'Converse', price: 60 },
    { name: 'Reebok', price: 130 },
    { name: 'New Balance', price: 75 },
    { name: 'Adidas', price: 95 },
    { name: 'Keds', price: 40 },
    { name: 'Crocs', price: 35 }
];
const priceQuery = 50;

const moreThan = (shoe) => shoe.price >= priceQuery;
const lessThan = (shoe) => shoe.price <= priceQuery;

console.log(shoes.every(moreThan));

