// EXAMPLE 1 - Get the Number of Days in a Month in JavaScript

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

// 👇️ Current Month
const daysInCurrentMonth = getDaysInMonth(
  currentYear,
  currentMonth,
);
console.log(daysInCurrentMonth); // 👉️ 31

// 👇️ Other Months
const daysInJanuary = getDaysInMonth(2025, 1);
console.log(daysInJanuary); // 👉️ 31

const daysInSeptember = getDaysInMonth(2025, 9);
console.log(daysInSeptember); // 👉️ 30

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Number of Days in the Current Month in JavaScript

// function getDaysInCurrentMonth() {
//   const date = new Date();

//   return new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0,
//   ).getDate();
// }

// const result = getDaysInCurrentMonth();
// console.log(result); // 👉️ 31

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Day of the Year (1 - 366) using JavaScript

// function getDayOfYear(date = new Date()) {
//   const timestamp1 = Date.UTC(
//     date.getFullYear(),
//     date.getMonth(),
//     date.getDate(),
//   );
//   const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);

//   const differenceInMilliseconds = timestamp1 - timestamp2;

//   const differenceInDays =
//     differenceInMilliseconds / 1000 / 60 / 60 / 24;

//   return differenceInDays;
// }

// console.log(getDayOfYear(new Date('2022-02-01'))); // 👉️ 32
// console.log(getDayOfYear(new Date('2022-01-29'))); // 👉️ 29
// console.log(getDayOfYear(new Date('2022-03-01'))); // 👉️ 60
// console.log(getDayOfYear(new Date('2022-12-31'))); // 👉️ 365
