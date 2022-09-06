var userPercent = document.querySelector("#userPercent")
var userMoneySpent = document.querySelector("#userMoneySpent")
var oneMonthIn = document.querySelector("#one-month")
var sixMonthIn = document.querySelector("#six-month")
var oneYearIn = document.querySelector("#one-year")
var threeYearIn = document.querySelector("#three-year")
var fiveYearIn = document.querySelector("#five-year")
var tenYearIn = document.querySelector("#ten-year")

function calculate() {
  var userPercentVal = userPercent.value;
  var userMoneySpentVal = userMoneySpent.value;
  var userCashBack = userPercentVal * userMoneySpentVal
  var amazCashBack = .05 * userMoneySpentVal
  var userMoneySaved = amazCashBack - userCashBack
  var userMoneySaved6mo = userMoneySaved * 6
  var userMoneySaved1Year = userMoneySaved6mo * 2
  var userMoneySaved3Year = userMoneySaved1Year * 3
  var userMoneySaved5Year = userMoneySaved1Year * 5
  var userMoneySaved10Year = userMoneySaved5Year * 2
  console.log(userCashBack + " is user's current cash back")
  console.log(amazCashBack + " is user's cash back w/ 5% back(or w/ amazon card)")
  console.log(userMoneySaved + " is the money user saves with amazon card")
  console.log(userMoneySaved6mo + " is amount saved over 6 months with amazon card")
  console.log(userMoneySaved1Year + " is amount saved over 1 year with amazon card")
  console.log(userMoneySaved3Year + " is amount saved over 3 years with amazon card")
  console.log(userMoneySaved5Year + " is amount saved over 5 years with amazon card")
  console.log(userMoneySaved10Year + " is amount saved over 10 years with amazon card")
  oneMonthIn.innerHTML = "$" + userMoneySaved
  sixMonthIn.innerHTML = "$" + userMoneySaved6mo
  oneYearIn.innerHTML = "$" + userMoneySaved1Year
  threeYearIn.innerHTML = "$" + userMoneySaved3Year
  fiveYearIn.innerHTML = "$" + userMoneySaved5Year
  tenYearIn.innerHTML = "$" + userMoneySaved10Year
}



