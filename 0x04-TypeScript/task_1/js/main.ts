interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; 
}

const teacher3: Teacher = {
  firstName: 'Francis',
  lastName: 'Gitau',
  fullTimeEmployee: false,
  location: 'Kirinyaga',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Mark',
  lastName: 'Rono',
  location: 'Kirinyaga',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);