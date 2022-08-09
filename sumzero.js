// Starting array
let array = [1, 2, -2]

for (let i = 0; i<array.length; i++){
    for (n=0; n<3; n++)
    if ((array[i] + array[n]) === 0) {
        console.log(`true`)
    } else { 
        console.log(`false`)
    }
}
  
  