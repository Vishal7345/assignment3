const oderlist=[
    {name:'Laptop',price:130000},
    {name:'Mobile',price:12000},
    {name:'Laptop charger',price:15000},
    {name:'Mobile charger',price:1800}
    
];

let sum=0;
oderlist.forEach((data)=>(sum+=data.price));

console.log(`The total price is Rs.${sum}`);