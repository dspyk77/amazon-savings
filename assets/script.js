var inputPercent = document.querySelector("#input-percent");
var moneySpent = document.querySelector("#input-money-spent");
var inputPercentDisplay = document.querySelector("#input-percent-display");
// ===================================================
var oneMonthIn = document.querySelector("#one-month");
var sixMonthIn = document.querySelector("#six-month");
var oneYearIn = document.querySelector("#one-year");
var threeYearIn = document.querySelector("#three-year");
var fiveYearIn = document.querySelector("#five-year");
var tenYearIn = document.querySelector("#ten-year");
// ==================================================
var oneMonthAm = document.querySelector("#one-month-am");
var sixMonthAm = document.querySelector("#six-month-am");
var oneYearAm = document.querySelector("#one-year-am");
var threeYearAm = document.querySelector("#three-year-am");
var fiveYearAm = document.querySelector("#five-year-am");
var tenYearAm = document.querySelector("#ten-year-am");
// ====================================================
var oneMonthAd = document.querySelector("#one-month-ad");
var sixMonthAd = document.querySelector("#six-month-ad");
var oneYearAd = document.querySelector("#one-year-ad");
var threeYearAd = document.querySelector("#three-year-ad");
var fiveYearAd = document.querySelector("#five-year-ad");
var tenYearAd = document.querySelector("#ten-year-ad");
// ======================================================

function inputPercentSelected() {
  inputPercentDisplay.innerHTML =
    "You have selected " + inputPercent.value + "%";
}

function calculate() {
  var intrestRate = inputPercent.value / 100; //intrestRate is now able to be used to calculate
  var moneySavedCurrent = intrestRate * moneySpent.value; // moneySavedCurrent holds the value of user's current cash back
  var moneySavedAm = 0.05 * moneySpent.value; // moneySavedAm holds the value of how much user saves w/ amazon
  var additionalMoneySaved = moneySavedAm - moneySavedCurrent; // additionalMoneySaved holds users additional savings w/ amazon
  // =============================================
  oneMonthIn.innerHTML = moneySavedCurrent;
  sixMonthIn.innerHTML = moneySavedCurrent * 6;
  oneYearIn.innerHTML = moneySavedCurrent * 12;
  threeYearIn.innerHTML = moneySavedCurrent * 12 * 3;
  fiveYearIn.innerHTML = moneySavedCurrent * 12 * 5;
  tenYearIn.innerHTML = moneySavedCurrent * 12 * 10;
  // ==============================================
  oneMonthAm.innerHTML = moneySavedAm;
  sixMonthAm.innerHTML = moneySavedAm * 6;
  oneYearAm.innerHTML = moneySavedAm * 12;
  threeYearAm.innerHTML = moneySavedAm * 12 * 3;
  fiveYearAm.innerHTML = moneySavedAm * 12 * 5;
  tenYearAm.innerHTML = moneySavedAm * 12 * 10;
  // ================================================
  oneMonthAd.innerHTML = additionalMoneySaved;
  sixMonthAd.innerHTML = additionalMoneySaved * 6;
  oneYearAd.innerHTML = additionalMoneySaved * 12;
  threeYearAd.innerHTML = additionalMoneySaved * 12 * 3;
  fiveYearAd.innerHTML = additionalMoneySaved * 12 * 5;
  tenYearAd.innerHTML = additionalMoneySaved * 12 * 10;
}

//  Working func first attempt needs clean up
// function calculate() {
//   var inputPercentVal = inputPercent.value;
//   var inputMoneySpentVal = inputMoneySpent.value
//   var inputPercentValDiv = inputPercentVal / 100
//   console.log(inputPercentValDiv)
//   var userCashBack = inputPercentValDiv * inputMoneySpentVal
//   var amazCashBack = .05 * inputMoneySpentVal
//   var userMoneySaved = amazCashBack - userCashBack
//   var userMoneySaved6mo = userMoneySaved * 6
//   var userMoneySaved1Year = userMoneySaved6mo * 2
//   var userMoneySaved3Year = userMoneySaved1Year * 3
//   var userMoneySaved5Year = userMoneySaved1Year * 5
//   var userMoneySaved10Year = userMoneySaved5Year * 2
//   console.log(userCashBack + " is user's current cash back")
//   console.log(amazCashBack + " is user's cash back w/ 5% back(or w/ amazon card)")
//   console.log(userMoneySaved + " is the money user saves with amazon card")
//   console.log(userMoneySaved6mo + " is amount saved over 6 months with amazon card")
//   console.log(userMoneySaved1Year + " is amount saved over 1 year with amazon card")
//   console.log(userMoneySaved3Year + " is amount saved over 3 years with amazon card")
//   console.log(userMoneySaved5Year + " is amount saved over 5 years with amazon card")
//   console.log(userMoneySaved10Year + " is amount saved over 10 years with amazon card")
//   oneMonthIn.innerHTML = "$" + userMoneySaved
//   sixMonthIn.innerHTML = "$" + userMoneySaved6mo
//   oneYearIn.innerHTML = "$" + userMoneySaved1Year
//   threeYearIn.innerHTML = "$" + userMoneySaved3Year
//   fiveYearIn.innerHTML = "$" + userMoneySaved5Year
//   tenYearIn.innerHTML = "$" + userMoneySaved10Year
// }

function linkToJabezGroup() {
    alert("The page you are about to view was not made by me.\nJabez group is a licensed Asset Based Lending (ABL) firm.")
}