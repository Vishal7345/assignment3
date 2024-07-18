let originalNumbers=[4,7,8,3,10];
originalNumbers.forEach((number,index,array)=>{

    array[index]=number*2;
});

console.log('Doubled Numbers:' ,originalNumbers);