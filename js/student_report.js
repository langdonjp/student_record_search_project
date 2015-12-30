// var definition
var message = '';
var student;
var search;
// This array holds the students found
var studentsArray = [];

// Print function
function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

// Information for Print Function
function studentList(studentsArray) {
  var information = ''; 
  for (l = 0; l < studentsArray.length; l +=1){
    information += '<h2>Student: ' + studentsArray[l].name + '</h2>';
    information += '<p>Tracks: ' + studentsArray[l].tracks + '</p>';
    information += '<p>Points: ' + studentsArray[l].points + '</p>';
    information += '<p>Achievements: ' + studentsArray[l].achievements + '</p>';
  }
  return information;
};

// The Loop
do {
  // Update Students Arrays, empty the array for a new search
  studentsArray = [];   
  // Ask for a student name
  search = prompt('Search Student Record: type a name, for example [Dave], to end type [quit]');
  // If result is null break else not found in record 
  if (search === null) {
    break;
  } else {
     message ='<h2>The Student Name: ' + search + ' is not part of our Students Records</h2>';
     print(message);
  }
  // Loop through the students Array of objects and compare / search for a name
  for (var i = 0; i < students.length; i += 1) {
    student = students[i];
    if (student.name.toLowerCase() === search.toLowerCase()){
      // Push every student and matching student into studentsArray
      studentsArray.push(student);   
      // Print the result in the document
      message = studentList(studentsArray);    
      print(message);
      }
  }
} while (search.toLowerCase() != 'quit')