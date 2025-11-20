interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

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

function createEmployee(salary: number | string): Director | Teacher {
    // @ts-ignore
  if (salary < 500) {
    return new Teacher();
  } 
  return new Director();
}

const employee1 = createEmployee(200);
console.log(employee1 instanceof Teacher ? "Teacher" : "Director");

const employee2 = createEmployee(1000);
console.log(employee2 instanceof Teacher ? "Teacher" : "Director");

const employee3 = createEmployee("$500");
console.log(employee3 instanceof Teacher ? "Teacher" : "Director");

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
console.log(teachClass(`Math`));
console.log(teachClass(`History`));