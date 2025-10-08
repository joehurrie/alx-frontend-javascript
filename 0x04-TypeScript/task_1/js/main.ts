interface Teachers {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  contract?: any;
}
const teacher3: Teachers = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false,
};
console.log(teacher3);

interface Directors {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  numberOfReports: number;
  contract?: any;
}

const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction
{
  (firstname:string, lastname:string):string
}

const printTeachers: printTeacherFunction = (firstname, lastname) => {
  let value: string = firstname[0] + ". " + lastname;
  return value;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

<<<<<<< HEAD
=======
const student = new StudentClass({ firstName: 'Amina', lastName: 'Kariuki' });
console.log(student.displayName()); // Output: Amina

console.log(student.workOnHomework()); // Output: Currently working
>>>>>>> 4203ed1 (task2 Director function implemented)
