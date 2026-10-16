const employee = {
  name: "Mona",
  baseSalary: 10000,
  bonusPercentage: 10,
  deduction: 500,


  calculateBonus(baseSalary, percentage) {
    return (baseSalary * percentage) / 100;
  },

  calculateNetSalary(baseSalary, bonus, deduction) {
    return baseSalary + bonus - deduction;
  },

  getsalaryStatus: (netSalary) => {
    if (netSalary >= 15000) {
      return "High Salary";
    } else if (netSalary >= 8000 && netSalary < 15000) {
      return "Medium Salary";
    } else {
      return "Low Salary";
    }
  }
};

const bonus = employee.calculateBonus(employee.baseSalary, employee.bonusPercentage);
const net = employee.calculateNetSalary(employee.baseSalary, bonus, employee.deduction);

console.log(`Bonus: ${bonus}`); 
console.log(`Net Salary: ${net}`); 
console.log(`Status: ${employee.getsalaryStatus(net)}`);