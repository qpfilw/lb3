function filterDivisible(
    numbers: number[],
    divisor: number
  ): number[] {
    return numbers.filter((num) => num % divisor === 0);
  }

  function joinStrings(
    strings: string[],
    delimiter: string
  ): string {
    return strings.join(delimiter);
  }

  function sortByProperty<T, K extends keyof T>(
    arr: T[],
    prop: K
  ): T[] {
    return [...arr].sort((a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      }
      if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    });
  }
  
  function withLogging<T extends (...args: any[]) => any>(
    fn: T
  ): (...args: Parameters<T>) => ReturnType<T> {
    return (...args: Parameters<T>): ReturnType<T> => {
      console.log("Вызов функции с аргументами:", args);
      return fn(...args);
    };
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const divisibleByTwo = filterDivisible(numbers, 2);
  console.log("Числа, кратные заданному числу (в данном случае кратны 2):", divisibleByTwo); 

  const words = ["Hello", "world", "Polina"];
  const joined = joinStrings(words, " ");
  console.log("Новая объедененная строка:", joined); 

  interface Person {
    name: string;
    age: number;
  }
  
  const people: Person[] = [
    { name: "Polina", age: 30 },
    { name: "Liza", age: 25 },
    { name: "Daria", age: 35 },
  ];
  
  const sortedByAge = sortByProperty(people, "age");
  console.log("Сортировка (в данном случае по возрасту):", sortedByAge);

  function add(a: number, b: number): number {
    return a + b;
  }
  
  const addWithLogging = withLogging(add);
  const result = addWithLogging(5, 10);
  console.log("Результат ф-ии:", result);
  