// Interface for Directors
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface for Teachers
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create employee instance based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Sample calls
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

// Type guard to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
   return employee instanceof Director;
 }
 
 // Function to execute the correct work task
 function executeWork(employee: Director | Teacher): string {
   if (isDirector(employee)) {
     return employee.workDirectorTasks();
   }
   return employee.workTeacherTasks();
 }
 
 // Sample calls
 console.log(executeWork(createEmployee(200)));   // Getting to work
 console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
// Literal type for subject names
type Subjects = "Math" | "History";

// Function to return the teaching message based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Sample calls
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
// Interface for Directors
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface for Teachers
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create employee instance based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Sample calls
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

// Type guard to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
   return employee instanceof Director;
 }
 
 // Function to execute the correct work task
 function executeWork(employee: Director | Teacher): string {
   if (isDirector(employee)) {
     return employee.workDirectorTasks();
   }
   return employee.workTeacherTasks();
 }
 
 // Sample calls
 console.log(executeWork(createEmployee(200)));   // Getting to work
 console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
// Literal type for subject names
type Subjects = "Math" | "History";

// Function to return the teaching message based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Sample calls
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
