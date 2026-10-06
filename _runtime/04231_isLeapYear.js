// _runtime/04231_isLeapYear.js
import toDate_mod from "03964_toDate.js";
import requiredArgs_mod from "03965_requiredArgs.js";

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isLeapYear(arg0) {
  requiredArgs.default(1, arguments);
  const defaultResult1 = toDate.default(arg0);
  const fullYear = defaultResult1.getFullYear();
  const result = fullYear % 400;
  let tmp4 = result === 0;
  if (!tmp4) {
    const result1 = fullYear % 4;
    let tmp6 = result1 === 0;
    if (result1 === 0) {
      tmp6 = fullYear % 100 !== 0;
    }
    tmp4 = tmp6;
  }
  return tmp4;
}
