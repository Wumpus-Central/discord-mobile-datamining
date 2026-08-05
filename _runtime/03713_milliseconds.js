// _runtime/03713_milliseconds.js
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  const obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
let c0 = tmp3;
let c1 = 365.2425;

export default function milliseconds(arg0) {
  let days;
  let hours;
  let minutes;
  let months;
  let seconds;
  let weeks;
  let years;
  ({ years, months, weeks, days, hours, minutes, seconds } = arg0);
  tmp3.default(1, arguments);
  let num = 0;
  if (years) {
    num = years * c1;
  }
  let sum = num;
  if (months) {
    sum = num + 30.436875 * months;
  }
  let sum1 = sum;
  if (weeks) {
    sum1 = sum + 7 * weeks;
  }
  let sum2 = sum1;
  if (days) {
    sum2 = sum1 + days;
  }
  const result = 24 * sum2 * 60 * 60;
  let sum3 = result;
  if (hours) {
    sum3 = result + 60 * hours * 60;
  }
  let sum4 = sum3;
  if (minutes) {
    sum4 = sum3 + 60 * minutes;
  }
  let sum5 = sum4;
  if (seconds) {
    sum5 = sum4 + seconds;
  }
  return Math.round(1000 * sum5);
};
export default exports.default;