/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var finalsalary=startingSalary;
for(i=1;i<=experience;i++){
    finalsalary=finalsalary+finalsalary*0.05;
}
console.log(finalsalary.toFixed(2));

