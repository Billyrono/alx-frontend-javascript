interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
} 

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

const teacher3: Teacher = {
  firstName: 'Francis',
  lastName: 'Gitau',
  fullTimeEmployee: false,
  location: 'Kirinyaga',
  contract: false,
};

console.log(teacher3);

const director1: Director = {
  firstName: 'Mark',
  lastName: 'Rono',
  location: 'Kirinyaga',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// @ts-ignore
function printTeacher({ firstName, lastName }) {
  return `${firstName}. ${lastName}`;
};

console.log(printTeacher({firstName:"Francis", lastName:"Gitau"}));

class StudentClass {
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

const student1 = new StudentClass("Billy", "Rono");

console.log(student1.displayName());
console.log(student1.workOnHomework());
