let table = [1, 2, 3, 4, 5, 6];

function result (myArray) {
  
  let sum = 0;
  let multiplication = 1;

  for (let i=0; i < myArray.length; i++) {

      sum = sum + myArray[i];
      multiplication = multiplication * myArray[i];

  if (i == myArray.length-1) {
    
    console.log(multiplication);
    console.log(sum);
}
    }
}


result(table);