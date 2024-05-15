const accountId = 123;

let accountEmail = "satyam@gmail.com";

var accountPassword = "1230";

accountCity = "Dehradun";

let accountState;

// accountId = 2; Not Allowed


/* 
Prefer Not to user Var Because of issue in block scope and functional scope
*/


accountEmail = "s@gmail.com";
accountPassword = "212100";
accountCity = "Jaipur";

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState,accountCity]);