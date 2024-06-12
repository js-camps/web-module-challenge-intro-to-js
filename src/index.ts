// src/index.ts

export function foo(): string {
    console.log('its working');
    return 'bar';
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  export function dogYears(age: number): number {
    return age * 7;
  }
  
  export function hungryDog(weight: number, age: number): number {
    if (age >= 1) {
      if (weight <= 5) {
        return weight * 0.05;
      } else if (weight <= 10) {
        return weight * 0.04;
      } else if (weight <= 15) {
        return weight * 0.03;
      } else {
        return weight * 0.02;
      }
    } else {
      if (age <= 0.33) {
        return weight * 0.1;
      } else if (age <= 0.58) {
        return weight * 0.05;
      } else {
        return weight * 0.04;
      }
    }
  }
  
  export function game(user: string, computer: string): string {
    if (user === computer) {
      return "it's a tie";
    }
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "you win!";
    }
    return "you lose!";
  }
  
  export function miles(kilometers: number): number {
    return kilometers * 0.621371;
  }
  
  export function feet(cm: number): number {
    return cm / 30.48;
  }
  
  export function annoyingSong(number: number): string {
    return `${number} bottles of soda on the wall, ${number} bottles of soda, take one down pass it around ${number - 1} bottles of soda on the wall`;
  }
  
  export function grade(score: number): string {
    if (score >= 90) {
      return 'you got an A';
    } else if (score >= 80) {
      return 'you got a B';
    } else if (score >= 70) {
      return 'you got a C';
    } else if (score >= 60) {
      return 'you got a D';
    } else {
      return 'you got an F';
    }
  }
  