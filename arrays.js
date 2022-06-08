var hungry= "true"
var notHungry= "false"
var students = ["Shaya" , "Jake" , "Angie" ," Hazel"];
var donuts= [7 , 4 , 2 , 5]
var hungryStudents= [notHungry , hungry , hungry, notHungry]


students.pop() //Hazel will be removed at the end of the element
donuts.push(1) //1 donuts will be added to the end of the element
hungryStudents.unshift(hungry)// hungry or true will be added to the first index
                              //in the element


//Index positions: Index positions are where something is located in an element
// for example looking at the students variable you can see that Hazel is in the
// index position 3 in the element. We know this becuase index positions start
// at 0 left to right.


console.log(students);
console.log(donuts);
console.log(hungryStudents);
