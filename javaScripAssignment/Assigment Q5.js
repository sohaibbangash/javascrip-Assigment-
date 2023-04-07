
let studentMarks = prompt("Enter your marks")

let totalMarks = 0;
for (let i = 0; i < studentMarks.length; i++) {
  totalMarks += studentMarks[i];
}


let averageMarks = totalMarks / studentMarks.length;


let grade;
if (averageMarks < 60) {
  grade = "F";
} else if (averageMarks < 70) {
  grade = "D";
} else if (averageMarks < 80) {
  grade = "C";
} else if (averageMarks < 90) {
  grade = "B";
} else {
  grade = "A";
}


console.log("The average marks are: " + averageMarks);
console.log("The corresponding grade is: " + grade);
