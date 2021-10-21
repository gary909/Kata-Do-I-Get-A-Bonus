function bonusTime(salary, bonus) {
    // your code here
    if (bonus == true) {
        return salary * 10;
    } else {
        return salary;
    }
 }

console.log(bonusTime(10000, true)); // returns '$100000'