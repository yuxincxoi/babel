function add(a: number, b: number): number {
  let result = a + b;
  return result;
}

interface Truth {
  name: string;
  age: number;
  job: "학생";
}

function yujin(): Truth {
  let obj: Truth = {
    name: "최유진",
    age: 21,
    job: "학생",
  }
  return obj;
}